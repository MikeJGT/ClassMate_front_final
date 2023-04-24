import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MensajeriaService } from 'src/app/services/mensajeria.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { TutorService } from 'src/app/services/tutor.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent {

  arrMensajes: any[]
  emisor: String
  receptor: String
  formMensaje: FormGroup;
  arrUsers: any[];
  conversacionId: any;
  constructor(
    private activateRoute: ActivatedRoute,
    private mensajeriaSV: MensajeriaService,
    private profesorService: ProfesorService,
    private tutorService: TutorService,
    private utilsService: UtilsService) {

    this.arrMensajes = [];
    this.emisor = '';
    this.receptor = '';
    this.arrUsers = [];
    this.conversacionId = 0;
    this.formMensaje = new FormGroup(
      {
        receptor_id: new FormControl(),
        contenido: new FormControl()
      }
    )
  }

  async ngOnInit() {

    try {
      this.activateRoute.params.subscribe(data => {
        //console.log(data['conversacionID'])
        this.conversacionId = data['conversacionID'];
        console.log('id', this.conversacionId);
      })
      const token = this.utilsService.getToken();
      //Si soy profesor muestro receptor tutor , si soy tutor muestor receptor de profesor
      switch (token.role) {
        case 'profesor': {
          this.arrUsers = await this.tutorService.getAllTutor()
          console.log('tutorrrr', this.arrUsers);
          break;

        }
        case 'tutor': {
          this.arrUsers = await this.profesorService.getAllProfesor();
          console.log('PROFEEEE', this.arrUsers);
          break;
        }
        default: {
          alert('No existe mensaje con este usuarios');
          break;
        }
      }

      const response = await this.mensajeriaSV.getMensajesByConversacionId(this.conversacionId);
      if (!response.fatal) {
        this.arrMensajes = response
      }
      // console.log('Mensajesssssss', this.arrMensajes);

    } catch (err) {
      //  console.log('ERROR->ERRRRRRRRRRRRRRRRRRRRRR');
    }
  }

  async getDataMensaje() {
    const obj = this.utilsService.getToken();
    // console.log(obj.user_id)
    console.log(this.formMensaje.value)
    const bodyMensaje = {
      contenido: this.formMensaje.value.contenido,
      emisor_id: obj.user_id,
      receptor_id: this.formMensaje.value.receptor_id,
      conversaciones_id: this.conversacionId
    }
    console.log('MENSAJE BODYYYYY', bodyMensaje);
    const res = await this.mensajeriaSV.insertMensaje(bodyMensaje);
    console.log('Mensajeriaasss guardasss', res)
  }
}
