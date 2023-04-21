import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  getAsignaturasByClaseId(claseId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/api/asignatura/${claseId}`)
    )
  }

  getAllAsignaturas() {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/api/asignatura/`)
    )
  }

  getHorarioByClaseId(id: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/horario/${id}`)
    )
  }

  setHorario(values: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/horario`, values)
    )
  }

  getAsignaturasByAlumnoID(alumnoId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/api/asignatura/alumnoAsignatura/${alumnoId}`)
    )
  }
}
