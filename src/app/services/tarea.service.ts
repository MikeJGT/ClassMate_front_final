import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  baseUrl: string = 'http://localhost:3000/api/tarea'
  constructor(
    private httpClient: HttpClient
  ) {

  }

  getTareaByAsignaturaId(asigId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/asignatura/${asigId}`)
    )
  }
}
