import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsignaturaService {
  baseUrl: string = 'http://localhost:3000/api/asignatura'
  constructor(private httpClient: HttpClient) { }

  getAsignaturasByClaseId(claseId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${claseId}`)
    )
  }
}
