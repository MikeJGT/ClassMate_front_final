import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from 'src/app/services/profesor.service';

@Component({
  selector: 'app-new-observacion',
  templateUrl: './new-observacion.component.html',
  styleUrls: ['./new-observacion.component.css']
})
export class NewObservacionComponent {
  formObservacion: FormGroup;
  alumnoID: any;
  claseID: any;
  constructor(
    private profesorService: ProfesorService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {
    this.formObservacion = new FormGroup(
      {
        titulo: new FormControl(),
        contenido: new FormControl(),
      }
    )
    this.alumnoID = 0;
    this.claseID = 0;
  }
  ngOnInit() {
    this.activatedRoute.params.subscribe(async (data: any) => {
      //console.log(data.claseid);
      this.alumnoID = data.id;
      this.claseID = data.claseid;
    })
  }
  async onSubmit() {
    console.log(this.formObservacion.value.titulo)
    console.log(this.formObservacion.value.contenido)
    const bodyObservacion = {
      titulo: this.formObservacion.value.titulo,
      contenido: this.formObservacion.value.contenido,
      alumno_id: this.alumnoID
    }
    const res = await this.profesorService.crearObservacion(bodyObservacion)
    console.log(res);
    this.router.navigate([`/profesor/clase/${this.claseID}`])

  }

}
