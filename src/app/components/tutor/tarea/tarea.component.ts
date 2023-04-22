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
  classID: any
  alumnoId: any
  constructor(
    private profesorService: ProfesorService,
    private activatedRoute: ActivatedRoute
  ) {
    this.arrTareas = [];
    this.classID = 0;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (data: any) => {
      //console.log('iddddddd', data.id)
      this.classID = data.id;
      this.alumnoId = data.alumnoId;
      this.arrTareas = await this.profesorService.getTareabyClassId(this.classID);
      //console.log('Rorrrrrrrrr', this.arrTareas)

    })
    //  await this.profesorService.getTareabyClassId()
  }
}
