import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  baseUrl: string = 'http://localhost:3000/api/alumnos'
  constructor(private httpClient: HttpClient) { }


  getAlumnosByClaseId(claseId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${claseId}`)
    )
  }

  getAlumnoById(alumnoId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`http://localhost:3000/api/profesor/alumno/${alumnoId}`)
    )
  }

  getAlumnosWithClassID() {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/clases`)
    )
  }
}
