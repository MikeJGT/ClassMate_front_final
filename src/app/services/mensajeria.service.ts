import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MensajeriaService {

  baseUrl: string = 'http://localhost:3000/api/conversacion'

  constructor(private httpClient: HttpClient) { }

  getConversaciones(conversacionId: any) {
    return firstValueFrom(
      this.httpClient.get<any[]>(`${this.baseUrl}/${conversacionId}`)
    )
  }
}
