import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  martes: String;
  constructor() {
    this.martes = 'm',
      this.formulario = new FormGroup({
        inicio: new FormControl(),
        dia: new FormControl(),
        asignaturas_id: new FormControl(),
        clases_id: new FormControl()
      })
  }

  //getClase {clase_nombre:'1A',clase_id:2}
  //getAsignatura {asignatura:'1A',asignatura:2}
  onSubmit() {
    console.log(this.formulario.value);
  }
}
