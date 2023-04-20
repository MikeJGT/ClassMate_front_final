import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ClaseService } from 'src/app/services/clase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  martes: String;
  asignaturas: any;
  clases: any;
  constructor(private asigSV: AsignaturaService, private classSV: ClaseService) {
    this.martes = 'm',
      this.formulario = new FormGroup({
        inicio: new FormControl(),
        dia: new FormControl(),
        asignaturas_id: new FormControl(),
        clases_id: new FormControl()
      }),
      this.asignaturas = [],
      this.clases = []
  }

  async ngOnInit() {
    this.asignaturas = await this.asigSV.getAllAsignaturas();
    this.clases = await this.classSV.getAllClases();
    console.log('asignaturas', this.asignaturas);
    console.log('clases', this.clases);
  }

  //getClase {clase_nombre:'1A',clase_id:2}
  //getAsignatura {asignatura:'Mates',asignatura_id:2}
  async onSubmit() {
    const result = await this.asigSV.setHorario(this.formulario.value);
    console.log(result);
  }
}
