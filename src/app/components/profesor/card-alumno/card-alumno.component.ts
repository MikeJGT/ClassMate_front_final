import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from 'src/app/services/alumno.service';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-card-alumno',
  templateUrl: './card-alumno.component.html',
  styleUrls: ['./card-alumno.component.css']
})
export class CardAlumnoComponent {

  perfil: any
  asignaturas: any
  notas: any
  id: any
  claseId: any
  formularioNota: FormGroup
  displayedColumns: String[]
  objToGetNotas: any
  constructor(
    private activatedRoute: ActivatedRoute,
    private alumnoSV: AlumnoService,
    private asigSV: AsignaturaService,
    private notasSV: NotasService
  ) {
    this.perfil = [];
    this.asignaturas = [];
    this.notas = [];
    this.id = 0;
    this.formularioNota = new FormGroup({
      nota: new FormControl(),
      id: new FormControl()
    });
    this.displayedColumns = ['asignatura', 'nota'];
    this.claseId = 0;
    this.objToGetNotas = {
      alumno_id: '',
      clases_id: ''
    };
  }
  async ngOnInit() {
    this.activatedRoute.params.subscribe(async params => {
      //console.log(params)
      this.id = params['id'];
      this.claseId = params['claseId'];
      console.log('CLASE ID', this.claseId);
      this.objToGetNotas.alumno_id = this.id;
      this.objToGetNotas.clases_id = this.claseId;

      this.asignaturas = await this.asigSV.getAsignaturasByClaseId(this.claseId);
      console.log('Asignaturas', this.asignaturas);

      //Recupera el alumnos a partir de su id;
      [this.perfil] = await this.alumnoSV.getAlumnoById(this.id);
      //console.log(this.perfil)

      this.insertOnInit();
    })
  }

  async insertOnInit() {
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
    console.log('PUTO OBJETO', this.objToGetNotas)
    console.log('NOTAS', this.notas)
    const body = {
      alumno_id: this.objToGetNotas.alumno_id,
      asignaturas_id: 0
    }
    if (this.notas.length === 0) {
      for (let asignatura of this.asignaturas) {
        body.asignaturas_id = asignatura.id
        await this.notasSV.insertNotasOnInit(body)
      }
    }
    //Al insertar datos en el back hay que volver a recogerlos
    //o no muestra los insertNotasOnInit 
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
    console.log('NOTAS 2', this.notas)
  }

  async onSubmit() {
    await this.notasSV.updateNota(this.formularioNota.value);
    //recargo el componente con cada submit
    this.ngOnInit();
    //console.log('Formulario NOTA', this.formularioNota.value);
  }
}
