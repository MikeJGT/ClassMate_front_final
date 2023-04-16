import { Component } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  arrTareas: any[];
  constructor(
    private profesorService: ProfesorService
  ) {
    this.arrTareas = [];
  }
  async ngOnInit() {
    this.arrTareas = await this.profesorService.getTareabyClassId(1);
  }
}
