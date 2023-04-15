import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-card-alumno',
  templateUrl: './card-alumno.component.html',
  styleUrls: ['./card-alumno.component.css']
})
export class CardAlumnoComponent {
  alumno: User | null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private profesorService: ProfesorService
  ) {
    this.alumno = null;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(data => {
      console.log(data['alumnoid'])
      //Recupera el alumnos a partir de su id;

    })
  }
}
