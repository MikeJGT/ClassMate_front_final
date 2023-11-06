import { Component } from '@angular/core';
import { AsignaturaService } from 'src/app/services/asignatura.service';
import { ProfesorService } from 'src/app/services/profesor.service';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  arr: any[]
  arrHoraProf: any[]
  token: any
  displayedColumns: String[]
  constructor(
    private profSv: ProfesorService,
    private userSV: UserService,
    private asigSV: AsignaturaService,
    private utilSV: UtilsService) {

    //Obtencion del token?
    this.token = utilSV.getToken(),

      //Simulo tener los datos del token ya decodificados
      this.arr = [{
        "usuario_id": 1,
        "rol": 'profesor'
      }],
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'],
     
      this.arrHoraProf = []
  }
  async ngOnInit() {
    //Dependiendo del rol muestro unos datos u otros
    switch (this.token.role) {
      case 'profesor': {
        this.arrHoraProf = await this.profSv.getHorarioByProfesorId(this.token.user_id)
        break;
      }
      case 'alumno': {
        const [{ clases_id }] = await this.profSv.getClassByAlumnoID(this.token.user_id);
        this.arrHoraProf = await this.userSV.getHorarioByClaseId(clases_id);
        break;
      }
      case 'tutor': {
        const [{ clases_id }] = await this.profSv.getClassByAlumnoID(this.token.user_id);
        this.arrHoraProf = await this.userSV.getHorarioByClaseId(clases_id);
        break;
      }
      default: {
        break;
      }
    }
  }

  transformDatos(array: any) {

    const horas = [{ h: '09:00:00', v: 0 }, { h: '10:00:00', v: 1 }, { h: '11:30:00', v: 2 }, { h: '12:30:00', v: 3 }, { h: '15:30:00', v: 4 }, { h: '16:30:00', v: 5 }];
    const horas2 = ['09:00:00', '10:00:00', '11:30:00', '12:30:00', '15:30:00', '16:30:00'];
    const dias = [{ d: 'l', v: 0 }, { d: 'm', v: 1 }, { d: 'x', v: 2 }, { d: 'j', v: 3 }, { d: 'v', v: 4 }];

    const total = Array.from({ length: 6 }, e => Array(5).fill(null))

    for (let item of array) {
      const x = horas.find(i => i.h === item.inicio)!.v;
      const y = dias.find(i => i.d === item.dia)!.v;
      total[x][y] = item.asignatura;
    }
    let i = 0;
    for (let hora of horas2) {
      total[i].unshift(hora);
      i++;
    }
    return total;
  };
}
