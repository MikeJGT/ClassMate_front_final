import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AsignaturaService } from 'src/app/services/asignatura.service';

@Component({
  selector: 'app-listar-asignaturas',
  templateUrl: './listar-asignaturas.component.html',
  styleUrls: ['./listar-asignaturas.component.css']
})
export class ListarAsignaturasComponent {
  arrAsig: any[]
  constructor(private asigSV: AsignaturaService, private actRoute: ActivatedRoute) {
    this.arrAsig = []
  }

  async ngOnInit() {
    this.actRoute.params.subscribe(async params => {
      console.log(params)
      const id = params['id'];
      //Recupera el alumnos a partir de su id;
      this.arrAsig = await this.asigSV.getAsignaturasByClaseId(id);
      console.log(this.arrAsig);

    })
  }
}
