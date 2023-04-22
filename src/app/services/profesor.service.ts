import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfesorService {
  baseUrl: string = 'http://localhost:3000'
  constructor(private httpClient: HttpClient) { }
  //Sacar todos los usuarios que es alumno
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
  //Sacar datos de tarea por clasesid  --En proceso
  getTareabyClassId(classId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/tarea/clase/${classId}`)
    )
  }
  //Sacar tarea por profesorId 
  getTareabyProfesorID(profesorId: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/tarea/profesor/${profesorId}`)
    )
  }

  //Sacar tarea profesor con ID
  getTareaProfesorById(idTarea: any) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/tarea/${idTarea}`)
    )
  }

  //Insertar tarea
  createTarea(tareaValue: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/tarea`, tareaValue)
    )
  }
  //Modificar tarea
  updateTask(idTarea: any, values: any) {
    return firstValueFrom(
      this.httpClient.put<any>(`${this.baseUrl}/api/tarea/${idTarea}`, values)
    )
  }

  //Recupera clase por idAlumno
  getClassByAlumnoID(idAlumno: number) {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/clase/alumnos/${idAlumno}`)
    )
  }

  //Borrar tarea
  deleteTask(idTarea: number) {
    return firstValueFrom(
      this.httpClient.delete<any>(`${this.baseUrl}/api/tarea/${idTarea}`)
    )
  }

  // insertar Asignatura
  crearAsignatura(profesorId: any, formValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/asignatura/${profesorId}`, formValues)
    )
  }

  //Insertar Observacion
  crearObservacion(observacionValues: any) {
    return firstValueFrom(
      this.httpClient.post<any>(`${this.baseUrl}/api/profesor/observacion`, observacionValues)
    )
  }
  getAllProfesor() {
    return firstValueFrom(
      this.httpClient.get<any>(`${this.baseUrl}/api/profesor/all`)
    )
  }
}
