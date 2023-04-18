import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/interfaces/user.interface';
import { TutorService } from 'src/app/services/tutor.service';

@Component({
  selector: 'app-tutor',
  templateUrl: './tutor.component.html',
  styleUrls: ['./tutor.component.css']
})
export class TutorComponent {

  searchForm: FormGroup;


  constructor(private tutorService: TutorService) {
    this.searchForm = new FormGroup({
      nombre: new FormControl('', [
        Validators.required,
      ])
    }, [])
  }

  async getData(): Promise<void> {
    try {
      console.log(this.searchForm.value)
      let name = this.searchForm.value.nombre
      let response = await this.tutorService.getTutorByName(name)
      if (response.length === 0) {
        alert('No existe ese usuario')
      }
      console.log(response)

    } catch (error) {
      console.log(error)
    }
  }
}
