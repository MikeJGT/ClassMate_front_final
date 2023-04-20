import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProfesorService } from 'src/app/services/profesor.service';
import { UtilsService } from 'src/app/services/utils.service';
import { __await } from 'tslib';

@Component({
  selector: 'app-crear-asignatura',
  templateUrl: './crear-asignatura.component.html',
  styleUrls: ['./crear-asignatura.component.css']
})
export class CrearAsignaturaComponent {

  formularioAsignatura: FormGroup
  arrAsignaturas: any[]


  constructor(
    private profesorService: ProfesorService,
    private utilsService: UtilsService
  ) {
    this.arrAsignaturas = []
    this.formularioAsignatura = new FormGroup({
      nombre: new FormControl(null, [
        Validators.required
      ])
    })
  }

  async onSubmit() {
    console.log(this.formularioAsignatura.value);
    const token = this.utilsService.getToken()
    console.log(token);
    this.arrAsignaturas = await this.profesorService.crearAsignatura(token.user_id, this.formularioAsignatura.value)
    console.log(this.arrAsignaturas);

  }
}

