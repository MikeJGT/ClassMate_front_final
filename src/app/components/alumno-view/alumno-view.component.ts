import { Component } from '@angular/core';
import { AlumnoService } from 'src/app/services/alumno.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-alumno-view',
  templateUrl: './alumno-view.component.html',
  styleUrls: ['./alumno-view.component.css']
})
export class AlumnoViewComponent {
  alumnoIdd: any;
  classIDd: any;
  arrAlumnos: any;
  token: any;
  constructor(private alumSV: AlumnoService, private utilSV: UtilsService) {
    this.arrAlumnos = [];
    this.token = this.utilSV.getToken();
    this.classIDd = 0;
    this.alumnoIdd = 0;
  }


  async ngOnInit() {
    this.arrAlumnos = await this.alumSV.getAlumnosWithClassID();
    this.alumnoIdd = this.token.user_id;
    for (let alumno of this.arrAlumnos) {
      if (alumno.id === this.token.user_id) {
        this.classIDd = alumno.clases_id
      }
    }
  }

}
