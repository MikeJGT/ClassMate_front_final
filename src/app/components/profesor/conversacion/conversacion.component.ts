import { Component } from '@angular/core';
import { MensajeriaService } from 'src/app/services/mensajeria.service';

@Component({
  selector: 'app-conversacion',
  templateUrl: './conversacion.component.html',
  styleUrls: ['./conversacion.component.css']
})
export class ConversacionComponent {

  arrConversaciones: any[]

  constructor(private mensajeriaService: MensajeriaService) {
    this.arrConversaciones = []
  }

  async ngOnInit() {
    const response = await this.mensajeriaService.getConversaciones()
    console.log(response);

    if (!response.fatal) {
      this.arrConversaciones = response;
    }
    //console.log(this.arrConversaciones);
  }
}
