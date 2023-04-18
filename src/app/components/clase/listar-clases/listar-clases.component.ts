import { Component } from '@angular/core';
import { ClaseService } from 'src/app/services/clase.service';

@Component({
  selector: 'app-listar-clases',
  templateUrl: './listar-clases.component.html',
  styleUrls: ['./listar-clases.component.css']
})
export class ListarClasesComponent {
  arrClases: any[]
  constructor(private claseSV: ClaseService) {
    this.arrClases = []
  }

  async ngOnInit() {
    this.arrClases = await this.claseSV.getAllClases();
    console.log(this.arrClases);
  }
}
