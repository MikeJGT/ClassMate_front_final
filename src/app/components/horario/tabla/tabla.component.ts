import { Component } from '@angular/core';
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
    private utilSV: UtilsService) {

    //Obtencion del token?
    this.token = utilSV.getToken(),

      //Simulo tener los datos del token ya decodificados
      this.arr = [{
        "usuario_id": 1,
        "rol": 'profesor'
      }],
      this.displayedColumns = ['hora', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes'],
      //Respuesta desde el Back, horarios para profesor
      this.arrHoraProf = [
        {
          "id": 1,
          "inicio": "09:00:00",
          "fin": "10:00:00",
          "dia": "l",
          "asignaturas_id": 1,
          "clases_id": 1,
          "asignatura": "Matemáticas",
          "clase": "1A",
          "profesor": "Juan"
        },
        {
          "id": 2,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "l",
          "asignaturas_id": 2,
          "clases_id": 2,
          "asignatura": "Física",
          "clase": "1B",
          "profesor": "María"
        },
        {
          "id": 3,
          "inicio": "11:00:00",
          "fin": "12:00:00",
          "dia": "l",
          "asignaturas_id": 3,
          "clases_id": 3,
          "asignatura": "Historia",
          "clase": "2A",
          "profesor": "Ana"
        },
        {
          "id": 4,
          "inicio": "12:00:00",
          "fin": "13:00:00",
          "dia": "l",
          "asignaturas_id": 4,
          "clases_id": 4,
          "asignatura": "Inglés",
          "clase": "2B",
          "profesor": "Pedro"
        },
        {
          "id": 5,
          "inicio": "15:00:00",
          "fin": "16:00:00",
          "dia": "l",
          "asignaturas_id": 5,
          "clases_id": 5,
          "asignatura": "Educación Física",
          "clase": "3A",
          "profesor": "Luisa"
        },
        {
          "id": 6,
          "inicio": "16:00:00",
          "fin": "17:00:00",
          "dia": "l",
          "asignaturas_id": 6,
          "clases_id": 6,
          "asignatura": "Arte",
          "clase": "3B",
          "profesor": "Carlos"
        },
        {
          "id": 7,
          "inicio": "09:00:00",
          "fin": "10:00:00",
          "dia": "m",
          "asignaturas_id": 7,
          "clases_id": 7,
          "asignatura": "Música",
          "clase": "1A",
          "profesor": "Rosa"
        },
        {
          "id": 8,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "m",
          "asignaturas_id": 8,
          "clases_id": 8,
          "asignatura": "Química",
          "clase": "1B",
          "profesor": "Mario"
        },
        {
          "id": 9,
          "inicio": "11:00:00",
          "fin": "12:00:00",
          "dia": "m",
          "asignaturas_id": 8,
          "clases_id": 8,
          "asignatura": "Química",
          "clase": "1B",
          "profesor": "Mario"
        },
        {
          "id": 10,
          "inicio": "12:00:00",
          "fin": "13:00:00",
          "dia": "m",
          "asignaturas_id": 9,
          "clases_id": 9,
          "asignatura": "Biología",
          "clase": "2A",
          "profesor": "Lucía"
        },
        {
          "id": 11,
          "inicio": "15:00:00",
          "fin": "16:00:00",
          "dia": "m",
          "asignaturas_id": 10,
          "clases_id": 10,
          "asignatura": "Tecnología",
          "clase": "3A",
          "profesor": "Javier"
        },
        {
          "id": 12,
          "inicio": "16:00:00",
          "fin": "17:00:00",
          "dia": "m",
          "asignaturas_id": 11,
          "clases_id": 11,
          "asignatura": "Geografía",
          "clase": "3B",
          "profesor": "Sandra"
        },
        {
          "id": 13,
          "inicio": "09:00:00",
          "fin": "10:00:00",
          "dia": "x",
          "asignaturas_id": 12,
          "clases_id": 12,
          "asignatura": "Matemáticas",
          "clase": "1A",
          "profesor": "Juan"
        },
        {
          "id": 14,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "x",
          "asignaturas_id": 13,
          "clases_id": 13,
          "asignatura": "Física",
          "clase": "1B",
          "profesor": "María"
        },
        {
          "id": 15,
          "inicio": "11:00:00",
          "fin": "12:00:00",
          "dia": "x",
          "asignaturas_id": 14,
          "clases_id": 14,
          "asignatura": "Historia",
          "clase": "2A",
          "profesor": "Ana"
        },
        {
          "id": 16,
          "inicio": "12:00:00",
          "fin": "13:00:00",
          "dia": "x",
          "asignaturas_id": 15,
          "clases_id": 15,
          "asignatura": "Inglés",
          "clase": "2B",
          "profesor": "Pedro"
        },
        {
          "id": 17,
          "inicio": "15:00:00",
          "fin": "16:00:00",
          "dia": "x",
          "asignaturas_id": 16,
          "clases_id": 16,
          "asignatura": "Educación Física",
          "clase": "3A",
          "profesor": "Luisa"
        },
        {
          "id": 18,
          "inicio": "16:00:00",
          "fin": "17:00:00",
          "dia": "x",
          "asignaturas_id": 16,
          "clases_id": 16,
          "asignatura": "Ingles",
          "clase": "3A",
          "profesor": "Luisa"
        },
        {
          "id": 19,
          "inicio": "09:00:00",
          "fin": "10:00:00",
          "dia": "j",
          "asignaturas_id": 1,
          "clases_id": 1,
          "asignatura": "Lengua C",
          "clase": "1A",
          "profesor": "Juan"
        },
        {
          "id": 20,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "j",
          "asignaturas_id": 2,
          "clases_id": 2,
          "asignatura": "Gallego",
          "clase": "1B",
          "profesor": "María"
        },
        {
          "id": 21,
          "inicio": "11:00:00",
          "fin": "12:00:00",
          "dia": "j",
          "asignaturas_id": 3,
          "clases_id": 3,
          "asignatura": "Naturales",
          "clase": "2A",
          "profesor": "Ana"
        },
        // {
        //   "id": 22,
        //   "inicio": "12:00:00",
        //   "fin": "13:00:00",
        //   "dia": "j",
        //   "asignaturas_id": 4,
        //   "clases_id": 4,
        //   "asignatura": "Tecnología",
        //   "clase": "2B",
        //   "profesor": "Pedro"
        // },
        {
          "id": 23,
          "inicio": "15:00:00",
          "fin": "16:00:00",
          "dia": "j",
          "asignaturas_id": 5,
          "clases_id": 5,
          "asignatura": "Astronomia",
          "clase": "3A",
          "profesor": "Luisa"
        },
        {
          "id": 24,
          "inicio": "16:00:00",
          "fin": "17:00:00",
          "dia": "j",
          "asignaturas_id": 6,
          "clases_id": 6,
          "asignatura": "Sociales",
          "clase": "3B",
          "profesor": "Carlos"
        },
        {
          "id": 25,
          "inicio": "09:00:00",
          "fin": "10:00:00",
          "dia": "v",
          "asignaturas_id": 1,
          "clases_id": 1,
          "asignatura": "Matemáticas",
          "clase": "1A",
          "profesor": "Juan"
        },
        {
          "id": 26,
          "inicio": "10:00:00",
          "fin": "11:00:00",
          "dia": "v",
          "asignaturas_id": 2,
          "clases_id": 2,
          "asignatura": "Física",
          "clase": "1B",
          "profesor": "María"
        },
        // {
        //   "id": 27,
        //   "inicio": "11:00:00",
        //   "fin": "12:00:00",
        //   "dia": "v",
        //   "asignaturas_id": 3,
        //   "clases_id": 3,
        //   "asignatura": "Historia",
        //   "clase": "2A",
        //   "profesor": "Ana"
        // },
        {
          "id": 28,
          "inicio": "12:00:00",
          "fin": "13:00:00",
          "dia": "v",
          "asignaturas_id": 4,
          "clases_id": 4,
          "asignatura": "Inglés",
          "clase": "2B",
          "profesor": "Pedro"
        },
        {
          "id": 29,
          "inicio": "15:00:00",
          "fin": "16:00:00",
          "dia": "v",
          "asignaturas_id": 5,
          "clases_id": 5,
          "asignatura": "Educación Física",
          "clase": "3A",
          "profesor": "Luisa"
        },
        {
          "id": 30,
          "inicio": "16:00:00",
          "fin": "17:00:00",
          "dia": "v",
          "asignaturas_id": 6,
          "clases_id": 6,
          "asignatura": "Arte",
          "clase": "3B",
          "profesor": "Carlos"
        }
      ]
  }
  async ngOnInit() {
    console.log('El token decodificado', this.token);
    //Dependiendo del rol muestro unos datos u otros
    switch (this.token.role) {
      case 'profesor': {
        await this.profSv.getHorarioByProfesorId(this.token.user_id)
        console.log('Horario para profesor', this.token.user_id);
        break;
      }
      case 'alumno': {
        await this.userSV.getHorarioByClaseId(this.token.user_id);
        console.log('Horario para alumnos', this.token.user_id);
        break;
      }
      case 'tutor': {
        await this.userSV.getHorarioByClaseId(this.token.user_id);
        console.log('Horario para padres', this.token.user_id);
        break;
      }
      default: {
        console.log('No hay horario para tu rol');
        break;
      }
    }
  }

  transformDatos(array: any) {
    const horas = [{ h: '09:00:00', v: 0 }, { h: '10:00:00', v: 1 }, { h: '11:00:00', v: 2 }, { h: '12:00:00', v: 3 }, { h: '15:00:00', v: 4 }, { h: '16:00:00', v: 5 }];
    const horas2 = ['09:00:00', '10:00:00', '11:00:00', '12:00:00', '15:00:00', '16:00:00'];
    const dias = [{ d: 'l', v: 0 }, { d: 'm', v: 1 }, { d: 'x', v: 2 }, { d: 'j', v: 3 }, { d: 'v', v: 4 }];

    const total = Array.from({ length: 6 }, e => Array(5).fill(null))

    for (let item of array) {
      console.log('ITEM', item.inicio, item.dia, item.asignatura);
      const x = horas.find(i => i.h === item.inicio)!.v;
      const y = dias.find(i => i.d === item.dia)!.v;
      total[x][y] = item.asignatura;
      console.log(total)
    }
    let i = 0;
    for (let hora of horas2) {
      total[i].unshift(hora);
      i++;
    }
    return total;
  };
}
