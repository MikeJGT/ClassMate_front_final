import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-listar-alumnos',
  templateUrl: './listar-alumnos.component.html',
  styleUrls: ['./listar-alumnos.component.css']
})
export class ListarAlumnosComponent {

  arrAlumnos: User[]

  constructor(private tutorService: TutorService) {
    this.arrAlumnos = []
  }

  async ngOnInit() {
    this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(2)
    console.log(this.arrAlumnos);

  }

}
