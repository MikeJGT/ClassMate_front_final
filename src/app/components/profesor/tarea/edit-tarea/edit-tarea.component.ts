import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-edit-tarea',
  templateUrl: './edit-tarea.component.html',
  styleUrls: ['./edit-tarea.component.css']
})
export class EditTareaComponent {
  formulario: FormGroup;
  constructor(
    private activatedRoute: ActivatedRoute,
    private profesorService: ProfesorService
  ) {
    this.formulario = new FormGroup(
      {
        titulo: new FormControl(),
        contenido: new FormControl(),
        fecha_entrega: new FormControl(),
        creacion_fecha: new FormControl()
      }
    )
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(
      async data => {
        let id = data['tareaid'];

        const [res] = await this.profesorService.getTareaProfesorById(id)
        // console.log('MI RESSSSSSSSSSSSSSSSSSsss', res)
        // console.log(res.id);
        delete res.Profesor;

        delete res.id
        delete res.clase;
        delete res.clases_id;
        delete res.asignatura;
        delete res.asignaturas_id;

        this.formulario.setValue(res)


      }
    )
  }
  onSubmit() {
    // console.log(this.formulario.value)
    this.activatedRoute.params.subscribe(async data => {
      let id = data['tareaid'];
      const response = await this.profesorService.updateTask(id, this.formulario.value);
      console.log(response);
    })
  }


}
