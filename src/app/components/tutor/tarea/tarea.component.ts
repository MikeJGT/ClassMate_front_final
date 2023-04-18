import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-tarea',
  templateUrl: './tarea.component.html',
  styleUrls: ['./tarea.component.css']
})
export class TareaComponent {
  arrTareas: any[];
  constructor(
    private profesorService: ProfesorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrTareas = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async data => {
      const classId = data['classId'];
      this.arrTareas = await this.profesorService.getTareabyClassId(classId);
      console.log(this.arrTareas)

    })
    //  await this.profesorService.getTareabyClassId()
  }
}
