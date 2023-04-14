import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup

  constructor(
    private userService: UserService,
    private router: Router
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
    this.router.navigate(['/profesor']);
  }
}
