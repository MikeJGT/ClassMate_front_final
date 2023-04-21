import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UtilsService } from '../services/utils.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard {

  constructor(
    private router: Router,
    private utilService: UtilsService) {

  }

  canActivate() {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login']);
      return false
    }
    return true;
  }

  checkProfesor() {
    const obj = this.utilService.getToken()

    if (obj.role !== 'profesor') {
      alert('Solo para profesor')
      return false
    }
    return true
  }


  checkAlumno() {
    const obj = this.utilService.getToken()

    if (obj.role !== 'alumno') {
      alert('Solo para alumno')
      return false
    }
    return true
  }


  checkTutor() {
    const obj = this.utilService.getToken()

    if (obj.role !== 'tutor') {
      alert('Solo para tutor')
      return false
    }
    return true
  }
}
