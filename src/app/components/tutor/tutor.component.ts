import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { TutorService } from 'src/app/services/tutor.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {

  arrAlumnos: any[];
  arrObservacion: any[];


  constructor(
    private tutorService: TutorService,
    private utilsService: UtilsService,
  ) {
    this.arrAlumnos = [];
    this.arrObservacion = [];
  }

  async ngOnInit() {
    const obj = this.utilsService.getToken();
    //console.log('Hoollaa', obj.user_id);
    const idTutor = obj.user_id
    this.arrAlumnos = await this.tutorService.getAlumnoByTutorId(idTutor);
    // console.log('Ejermmmm', this.arrAlumnos);
    this.arrObservacion = await this.tutorService.getObservationBytutorID(idTutor);
    console.log(this.arrObservacion);

  }


}
