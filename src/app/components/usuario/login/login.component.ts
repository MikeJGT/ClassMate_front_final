import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup

  constructor(
    private userService: UserService,
    private router: Router,
    private utilService: UtilsService
  ) {
    this.formulario = new FormGroup({
      email: new FormControl(null, [
        Validators.required
      ]),
      password: new FormControl(null, [
        Validators.required
      ])
    }, [])
  }

  async onSubmit() {
    try {
      console.log(this.formulario.value)
      const response = await this.userService.getUserByLogin(this.formulario.value);

      if (response.fatal) {
        return alert(response.fatal);
      }
      localStorage.setItem('token', response.token);
      console.log('Sale el token ?', response);
    } catch (error) {
      console.log(error)
    }
    const token = this.utilService.getToken()
    if (token.role === 'profesor') {
      this.router.navigate(['/profesor']);

    } else if (token.role === 'alumno') {
      this.router.navigate(['/alumno']);
    } else {
      alert('No eres profesor ni alumno')
    }
  }
}
