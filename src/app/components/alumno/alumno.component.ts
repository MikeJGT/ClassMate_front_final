import { Component } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {

  arrAsignaturas: any[]

  constructor(
    private asignaturasService: AsignaturaService,
    private utilService: UtilsService) {
    this.arrAsignaturas = []
  }

  async ngOnInit() {
    const token = this.utilService.getToken()
    const AlumnoId = token.user_id

    const response = await this.asignaturasService.getAsignaturasByAlumnoID(AlumnoId);

    this.arrAsignaturas = response
  }
}
