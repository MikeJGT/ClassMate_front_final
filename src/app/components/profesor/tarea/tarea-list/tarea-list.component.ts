import { Component } from '@angular/core';
import { ProfesorComponent } from '../../profesor/profesor.component';
import { ProfesorService } from 'src/app/services/profesor.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent {
  tareas: any[]
  constructor(
    private profesorService: ProfesorService,
    private utisService: UtilsService
  ) {
    this.tareas = []
  }
  async ngOnInit() {
    //Decodifica user_id y role del token
    const obj = this.utisService.getToken();
    console.log(obj)
    console.log(obj.role);


    switch (obj.role) {
      case 'profesor': {
        this.tareas = await this.profesorService.getTareabyProfesorID(obj.user_id)
        //console.log(this.tareas)
        break;
      }
      case 'alumno': {
        //Guardo claseID por la siguiente peticion
        const [{ clases_id }] = await this.profesorService.getClassByAlumnoID(obj.user_id);

        this.tareas = await this.profesorService.getTareabyClassId(clases_id);
        break;
      }
      default: {
        alert('No existe tarea en el role ');
        break;
      }


    }
  }

  //Funcion borrar tarea
  async deleteTask(idTask: number) {
    const res = await this.profesorService.deleteTask(idTask);
    console.log(res);
  }
}
