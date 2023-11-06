import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  constructor() { }

  getToken() {
    const obj = jwtDecode<any>(localStorage.getItem('token')!);
    return obj;
  }
}
