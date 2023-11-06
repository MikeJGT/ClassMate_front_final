import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AlumnoService } from 'src/app/services/alumno.service';
import { TutorService } from 'src/app/services/tutor.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent {

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
      switch (this.token.role) {
        case 'profesor': {
          this.arrAlumnos = await this.alumnoSV.getAlumnosByClaseId(id)
          break;
        }
        case 'tutor': {
          this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(id)
          break;
        }
        default: {
          break;
        }
      }
    })
  }

}
