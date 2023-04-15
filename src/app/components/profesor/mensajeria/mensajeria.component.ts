import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MensajeriaService } from 'src/app/services/mensajeria.service';

@Component({
  selector: 'app-mensajeria',
  templateUrl: './mensajeria.component.html',
  styleUrls: ['./mensajeria.component.css']
})
export class MensajeriaComponent {

  arrMensajes: any[]
  emisor: String
  receptor: String
  constructor(private activateRoute: ActivatedRoute, private mensajeriaSV: MensajeriaService) {
    this.arrMensajes = [];
    this.emisor = '';
    this.receptor = '';
  }

  async ngOnInit() {
    let id = 0;
    try {
      this.activateRoute.params.subscribe(data => {
        //console.log(data['conversacionID'])
        id = data['conversacionID'];
        console.log('id', id);
      })
      this.arrMensajes = await this.mensajeriaSV.getMensajesByConversacionId(id);
      console.log('Mensajes', this.arrMensajes);

    } catch (err) {
      console.log('ERROR->ERRRRRRRRRRRRRRRRRRRRRR');
    }
  }
}
