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
        this.conversacionId = data['conversacionID'];
      })
      const token = this.utilsService.getToken();
      switch (token.role) {
        case 'profesor': {
          this.arrUsers = await this.tutorService.getAllTutor()
          break;

        }
        case 'tutor': {
          this.arrUsers = await this.profesorService.getAllProfesor();
          break;
        }
        default: {
          alert('No existe mensaje con este usuarios');
          break;
        }
      }
      //Lista Mensajeria
      const response = await this.mensajeriaSV.getMensajesByConversacionId(this.conversacionId);
      if (!response.fatal) {
        this.arrMensajes = response
      }
    } catch (err) {
       console.log('Error', err);
    }
  }

  async getDataMensaje() {
    const obj = this.utilsService.getToken();
    const bodyMensaje = {
      contenido: this.formMensaje.value.contenido,
      emisor_id: obj.user_id,
      receptor_id: this.formMensaje.value.receptor_id,
      conversaciones_id: this.conversacionId
    }
    const res = await this.mensajeriaSV.insertMensaje(bodyMensaje);
    this.formMensaje.reset();
    if (res.affectedRows) {
      const response = await this.mensajeriaSV.getMensajesByConversacionId(this.conversacionId);
      if (!response.fatal) {
        this.arrMensajes = response
      }

    }
  }

  async deleteMessage(idMensaje: number) {
    const resDelete = await this.mensajeriaSV.deleteMensajeById(idMensaje)
    if (resDelete.affectedRows) {
      const response = await this.mensajeriaSV.getMensajesByConversacionId(this.conversacionId);
      if (!response.fatal) {
        this.arrMensajes = response;
      } else {
        this.arrMensajes = [];
      }
    }
  }
}
