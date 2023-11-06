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
    };
  }

  async ngOnInit() {

    this.objToGetNotas.alumno_id = this.alumnoId;
    this.objToGetNotas.clases_id = this.claseID;

    this.asignaturas = await this.asigSV.getAsignaturasByClaseId(this.claseID);
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);

    this.insertOnInit();
  }


  async insertOnInit() {
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
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
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
  }

  async ngOnChanges() {

    this.objToGetNotas.alumno_id = this.alumnoId;
    this.objToGetNotas.clases_id = this.claseID;

    this.asignaturas = await this.asigSV.getAsignaturasByClaseId(this.claseID);
    this.notas = await this.notasSV.getAllNotasByAlumnoId(this.objToGetNotas);
  }
}
