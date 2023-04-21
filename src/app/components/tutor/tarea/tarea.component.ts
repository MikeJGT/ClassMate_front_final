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
    this.activatedRoute.params.subscribe(async (data: any) => {
      //console.log('iddddddd', data.id)
      const classID = data.id;
      this.arrTareas = await this.profesorService.getTareabyClassId(classID);
      //console.log('Rorrrrrrrrr', this.arrTareas)

    })
    //  await this.profesorService.getTareabyClassId()
  }
}
