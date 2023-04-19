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
  constructor(
    private tutorService: TutorService,
    private activatedRoute: ActivatedRoute,
    private utilSV: UtilsService,
    private alumnoSV: AlumnoService
  ) {
    this.arrAlumnos = [],
      this.token = this.utilSV.getToken()
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = params.id
      console.log('PARAMETROSSSS', params);
      switch (this.token.role) {
        case 'profesor': {
          // this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(id)
          this.arrAlumnos = await this.alumnoSV.getAlumnosByClaseId(id)
          console.log('Horario para profesor', this.token.user_id);
          break;
        }
        case 'tutor': {
          this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(id)
          console.log('Horario para padres', this.token.user_id);
          break;
        }
        default: {
          console.log('No hay horario para tu rol');
          break;
        }
      }
    })
    console.log(this.arrAlumnos);

  }

}
