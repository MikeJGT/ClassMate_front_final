import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  baseUrl: string = 'http://localhost:3000/api/clase'
  constructor(private httpClient: HttpClient) { }

  getAllClases() {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/`)
    )
  }
  getClaseByClaseId(claseId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${claseId}`)
    )
  }
}
