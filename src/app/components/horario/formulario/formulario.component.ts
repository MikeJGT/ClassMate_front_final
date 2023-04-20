import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  martes: String;
  asignaturas: any;
  constructor(private asigSV: AsignaturaService) {
    this.martes = 'm',
      this.formulario = new FormGroup({
        inicio: new FormControl(),
        dia: new FormControl(),
        asignaturas_id: new FormControl(),
        clases_id: new FormControl()
      }),
      this.asignaturas = [];
  }

  //getClase {clase_nombre:'1A',clase_id:2}
  //getAsignatura {asignatura:'Mates',asignatura_id:2}
  async onSubmit() {
    this.asignaturas = await this.asigSV.getAllAsignaturas();
    console.log(this.formulario.value);
    console.log('asignaturas', this.asignaturas);
  }
}
