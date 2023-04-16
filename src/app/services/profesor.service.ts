import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  getUsers() {
    return firstValueFrom(
      //pasar el authorization
      this.httpClient.get<any>(`${this.baseUrl}/api/profesor/alumno`)
    );
  }

  getHorarioByProfesorId(profesorId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/horario/profesor/${profesorId}`)
    )
  }
}
