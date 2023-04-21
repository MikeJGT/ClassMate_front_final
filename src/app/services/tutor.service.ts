import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  baseUrl: string = 'http://localhost:3000'

  constructor(private httpClient: HttpClient) { }

  getAlumnoByTutorId(tutorId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/usuarios/tutor/id/${tutorId}`)
    )
  }

  getTutor() {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/usuarios/tutor`)
    )
  }


  getObservationBytutorID(tutorid: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/tutor/observacion/${tutorid}`)
    )
  }
}
