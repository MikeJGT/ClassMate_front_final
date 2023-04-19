import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { AlumnoService } from 'src/app/services/alumno.service';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-card-alumno',
  templateUrl: './card-alumno.component.html',
  styleUrls: ['./card-alumno.component.css']
})
export class CardAlumnoComponent {

  perfil: any

  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoSV: AlumnoService
  ) {
    this.perfil = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      console.log(params)
      const id = params['id'];
      //Recupera el alumnos a partir de su id;
      [this.perfil] = await this.alumnoSV.getAlumnoById(id);
      console.log(this.perfil)
    })
  }
}
