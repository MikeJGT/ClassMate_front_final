import { Component, Input } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { NotasService } from 'src/app/services/notas.service';

@Component({
  selector: 'app-notas-view',
  templateUrl: './notas-view.component.html',
  styleUrls: ['./notas-view.component.css']
})
export class NotasViewComponent {
  asignaturas: any
  notas: any
  displayedColumns: String[]
  objToGetNotas: any

  @Input() alumnoId: any;
  @Input() claseID: any;

  constructor(
    private asigSV: AsignaturaService,
    private notasSV: NotasService
  ) {
    this.asignaturas = [];
    this.notas = [];
    this.displayedColumns = ['asignatura', 'nota'];
    this.objToGetNotas = {
      alumno_id: '',
      clases_id: ''
    };
  }

  async ngOnInit() {

    this.objToGetNotas.alumno_id = this.alumnoId;
    this.objToGetNotas.clases_id = this.claseID;
    console.log('CLASE ID', this.claseID);

    this.asignaturas = await this.asigSV.getAsignaturasByClaseId(this.claseID);
    console.log('Asignaturas', this.asignaturas);
    //console.log(this.perfil)
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
    console.log('Notas', this.notas);

    this.insertOnInit();
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
}
