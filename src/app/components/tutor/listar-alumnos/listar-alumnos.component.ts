import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/app/interfaces/user.interface';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent {

  arrAlumnos: User[]

  constructor(
    private tutorService: TutorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrAlumnos = []
  }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(async (params: any) => {
      let id = params.tutorId
      console.log(params)
      this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(id)
    })
    console.log(this.arrAlumnos);

  }

}
