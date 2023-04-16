import { Component } from '@angular/core';
import { ProfesorService } from 'src/app/services/profesor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent {
  arr: any[]
  arrHoraProf: any[]
  token: any
  constructor(private profSv: ProfesorService, private userSV: UserService) {

    //Obtencion del token?
    this.token = localStorage.getItem('token'),

      //Simulo tener los datos del token ya decodificados
      this.arr = [{
        "usuario_id": 1,
        "rol": 'profesor'
      }],

      //Respuesta desde el Back, horarios para profesor
      this.arrHoraProf = [
        {
          "id": 1,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "m",
          "asignaturas_id": 1,
          "clases_id": 1,
          "asignatura": "Fisica",
          "clase": "1A",
          "profesor": "Pepe",
          "rol": "profesor",
          "user_id": 1
        },
        {
          "id": 1,
          "inicio": "14:00:00",
          "fin": "15:00:00",
          "dia": "l",
          "asignaturas_id": 1,
          "clases_id": 1,
          "asignatura": "Mates",
          "clase": "1A",
          "profesor": "Pepe"
        }
      ]
  }
  async ngOnInit() {

    //Dependiendo del rol muestro unos datos u otros
    switch (this.arr[0].rol) {
      case 'profesor': {
        await this.profSv.getHorarioByProfesorId(this.arr[0].usuario_id)
        console.log('Horario para profesor', this.arr[0].usuario_id);
        break;
      }
      case 'alumno': {
        await this.userSV.getHorarioByClaseId(this.arr[0].usuario_id);
        console.log('Horario para alumnos');
        break;
      }
      case 'tutor': {
        await this.userSV.getHorarioByClaseId(this.arr[0].usuario_id);
        console.log('Horario para padres');
        break;
      }
      default: {
        console.log('No hay horario para tu rol');
        break;
      }
    }
  }
}
