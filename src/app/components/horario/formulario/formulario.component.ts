import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ClaseService } from 'src/app/services/clase.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario: FormGroup;
  asignaturas: any;
  clases: any;
  constructor(private asigSV: AsignaturaService, private classSV: ClaseService) {
    this.formulario = new FormGroup({
      inicio: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      dia: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      asignaturas_id: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ]),
      clases_id: new FormControl('', [
        Validators.required,
        Validators.minLength(1)
      ])
    }),
      this.asignaturas = [],
      this.clases = []
  }

  async ngOnInit() {
    this.asignaturas = await this.asigSV.getAllAsignaturas();
    this.clases = await this.classSV.getAllClases();
  }
  async onSubmit() {
    const result = await this.asigSV.setHorario(this.formulario.value);
    alert('Asignatura Registrada')
    this.formulario.reset();
  }
}
