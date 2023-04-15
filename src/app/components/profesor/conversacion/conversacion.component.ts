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
    this.arrConversaciones = await this.mensajeriaService.getConversaciones()
    console.log(this.arrConversaciones);
  }
}
