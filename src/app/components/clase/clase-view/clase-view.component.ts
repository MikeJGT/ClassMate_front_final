import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TutorService } from 'src/app/services/tutor.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-clase-view',
  templateUrl: './clase-view.component.html',
  styleUrls: ['./clase-view.component.css']
})
export class ClaseViewComponent {

  arrAlumnos: User[]
  token: any;
  alumnos: any[];
  classId: any;
  constructor(
    private tutorService: TutorService,
    private activatedRoute: ActivatedRoute,
    private utilSV: UtilsService,
    private alumnoSV: AlumnoService
  ) {
    this.arrAlumnos = [],
      this.token = this.utilSV.getToken(),
      this.alumnos = [],
      this.classId = 0
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      this.classId = params.id
      //Recoge datos de todos los alumnos
      const res = await this.alumnoSV.getAlumnosWithClassID();
      this.alumnos = res

      const resAll = await this.alumnoSV.getAllAlumnosFromUsuarios();
      this.arrAlumnos = resAll;
      localStorage.setItem('claseId', this.classId);

    })
  }
  async getDataFrom(pValue: any) {
    const bodyForm = {
      alumno_id: pValue.value.alumnoId,
      clases_id: this.classId
    }
    await this.alumnoSV.insertAlumnoByClassID(bodyForm);
  }

  //Borrar alumno
  async deleteAlumno(idAlumno: any) {
    await this.alumnoSV.deleteAlumnoByID(idAlumno)
  }


}
