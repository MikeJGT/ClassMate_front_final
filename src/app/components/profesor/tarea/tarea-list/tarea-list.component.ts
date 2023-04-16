import { Component } from '@angular/core';
import { ProfesorComponent } from '../../profesor/profesor.component';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent {
  tareas: any[]
  constructor(
    private profesorService: ProfesorService
  ) {
    this.tareas = []
  }
  async ngOnInit() {
    this.tareas = await this.profesorService.getTareabyProfesorID(3);
    console.log(this.tareas)
  }
}
