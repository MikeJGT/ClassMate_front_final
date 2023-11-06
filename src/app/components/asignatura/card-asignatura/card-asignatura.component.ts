import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-card-asignatura',
  templateUrl: './card-asignatura.component.html',
  styleUrls: ['./card-asignatura.component.css']
})
export class CardAsignaturaComponent {
  asignatura: string
  datosFormulario: any[]
  idAsignatura: number = 0;
  constructor(private actRoute: ActivatedRoute,
    public alumnoService: UserService) {
    this.asignatura = ''
    this.datosFormulario = []
  }

  ngOnInit() {
    this.actRoute.params.subscribe(async params => {

      const id = params['id'];
      this.asignatura = params['nombre'];
      localStorage.setItem('asignaturaId', id);
    })

  }

  getNombre($event: any) {
    this.idAsignatura = $event;
  }
}
