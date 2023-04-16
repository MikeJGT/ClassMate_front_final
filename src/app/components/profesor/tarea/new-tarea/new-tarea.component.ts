import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-new-tarea',
  templateUrl: './new-tarea.component.html',
  styleUrls: ['./new-tarea.component.css']
})
export class NewTareaComponent {
  formularioTarea: FormGroup

  constructor(
    private profesorService: ProfesorService
  ) {
    this.formularioTarea = new FormGroup(
      {
        asignaturas_id: new FormControl(),
        clases_id: new FormControl(null, [
          Validators.required
        ]),
        titulo: new FormControl(null, [
          Validators.required
        ]),
        contenido: new FormControl(null, [
          Validators.required
        ]),
        fecha_entrega: new FormControl(null, [
          Validators.required
        ])
      }
    )
  }

  async onSubmit() {
    console.log(this.formularioTarea.value)
    const response = await this.profesorService.createTarea(this.formularioTarea.value)
    console.log(response)
  }

  //Chequea el error
  checkError(control: string, validator: string) {
    return this.formularioTarea.get(control)?.hasError(validator) && this.formularioTarea.get(control)?.touched;
  }
}
