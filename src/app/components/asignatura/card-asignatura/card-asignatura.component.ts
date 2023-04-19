import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card-asignatura',
  templateUrl: './card-asignatura.component.html',
  styleUrls: ['./card-asignatura.component.css']
})
export class CardAsignaturaComponent {
  asignatura: string
  constructor(private actRoute: ActivatedRoute) {
    this.asignatura = ''
  }

  ngOnInit() {
    this.actRoute.params.subscribe(async params => {
      console.log(params)
      const id = params['id'];
      this.asignatura = params['nombre'];
      console.log('ASIGNATURA EMITIDA', this.asignatura)
      //lista de tareas para una asignatura
      //reutilizamos tarea-list-component   

    })

  }

  getNombre($event: any) {
    console.log('EVENTO', $event);
    this.asignatura = $event;
  }
}