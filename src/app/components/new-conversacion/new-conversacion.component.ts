import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MensajeriaService } from 'src/app/services/mensajeria.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-new-conversacion',
  templateUrl: './new-conversacion.component.html',
  styleUrls: ['./new-conversacion.component.css']
})
export class NewConversacionComponent {
  formConversacion: FormGroup

  constructor(
    private mensajeriaService: MensajeriaService,
    private utilsService: UtilsService,
    private router: Router
  ) {
    this.formConversacion = new FormGroup(
      {
        asunto: new FormControl()
      }
    )
  }
  async onSubmit() {
    console.log(this.formConversacion.value)
    const obj = this.utilsService.getToken();
    console.log('TOOKKKEEENNN', obj)
    await this.mensajeriaService.insertConversacion(this.formConversacion.value)
    switch (obj.role) {
      case 'profesor': {
        this.router.navigate(['/profesor']);
        break;
      }
      case 'tutor': {
        this.router.navigate(['/tutor']);
        break;
      }

      default: {
        alert('No existe este rol en convesacion');
        break;
      }
    }
  }
}
