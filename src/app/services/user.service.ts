import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl: string = 'http://localhost:3000'

  constructor(
    private httpClient: HttpClient,
    private utilService: UtilsService
  ) { }


  getUserByLogin(LoginValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/usuarios/login`, LoginValues)
    )
  }
  getHorarioByClaseId(claseId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/horario/${claseId}`)
    )
  }
  getUserById(userId: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/usuarios/${userId}`)
    )
  }

  isLogged(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    } else {
      return false;
    }
  }

  isAlumno() {
    const obj = this.utilService.getToken()

    if (obj.role === 'alumno') {
      return false
    }
    return true
  }

  isTutor() {
    const obj = this.utilService.getToken()

    if (obj.role === 'tutor') {
      return false
    }
    return true
  }

  isProfesor() {
    const obj = this.utilService.getToken()

    if (obj.role === 'profesor') {
      return false
    }
    return true
  }

}
