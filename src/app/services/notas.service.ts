import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotasService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }

  getAllNotasByAlumnoId(values: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/calificacion/all/`, values)
    )
  }

  insertNotasOnInit(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/calificacion`, body)
    )
  }

  updateNota(body: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/calificacion/update`, body)
    )
  }
}
