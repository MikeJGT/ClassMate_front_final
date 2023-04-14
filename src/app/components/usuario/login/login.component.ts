import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  formulario: FormGroup

  constructor(
    private userService: UserService
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
      console.log(response);
    } catch (error) {
      console.log(error)
    }

  }
}
