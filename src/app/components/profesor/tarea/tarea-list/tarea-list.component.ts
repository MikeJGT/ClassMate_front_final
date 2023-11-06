import { Component, Input, } from '@angular/core';

import { ProfesorService } from 'src/app/services/profesor.service';
import { UtilsService } from 'src/app/services/utils.service';
import { TareaService } from 'src/app/services/tarea.service';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.css']
})
export class TareaListComponent {
  tareas: any[]
  @Input() asignaturaId: any;
  constructor(
    private profesorService: ProfesorService,
    private utisService: UtilsService,
    private tareaService: TareaService,
    private activatedRoute: ActivatedRoute,
    public alumnoService: UserService
  ) {
    this.tareas = [];
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      const id = params['id'];
      await this.listarTareaByRol(id)
    })

  };

  async ngOnChanges(): Promise<void> {
    await this.listarTareaByRol(this.asignaturaId.id)
  };

  //Funcion borrar tarea
  async deleteTask(idTask: number) {
    await this.profesorService.deleteTask(idTask);
    await this.listarTareaByRol(this.asignaturaId.id)

  }



  async listarTareaByRol(pId: any) {
    const obj = this.utisService.getToken();
    switch (obj.role) {
      case 'profesor': {
        this.tareas = await this.tareaService.getTareaByAsignaturaId(pId);
        break;
      }
      case 'alumno': {
        const [{ clases_id }] = await this.profesorService.getClassByAlumnoID(obj.user_id);
        this.tareas = await this.profesorService.getTareabyClassId(clases_id);
        break;
      }

      case 'tutor': {
        break;
      }
      default: {
        alert('No existe tarea en el role ');
        break;
      }

    }
  }
}
