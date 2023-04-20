import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ClaseService } from 'src/app/services/clase.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-assign-alumno',
  templateUrl: './assign-alumno.component.html',
  styleUrls: ['./assign-alumno.component.css']
})
export class AssignAlumnoComponent {
  arrAlumnos: any[];
  alumnoID: number;
  FormAlumno: FormGroup


  constructor(
    private alumnoService: AlumnoService,
    private classService: ClaseService) {
    this.arrAlumnos = [];
    this.alumnoID = 0;
    this.FormAlumno = new FormGroup(
      {

      }
    )
  }
  async ngOnInit() {
    //Recoge datos de todos los alumnos
    const res = await this.alumnoService.getAlumnosWithClassID();
    this.arrAlumnos = res;
    console.log(this.arrAlumnos)
    //Recoge datos de todos los clases

  }
  getAlumID(alumnoId: number) {
    this.alumnoID = alumnoId
    console.log(this.alumnoID)
  }

  getDataForm(pForm: any) {
    console.log(pForm.value);
  }


}
