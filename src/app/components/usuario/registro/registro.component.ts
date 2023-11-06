import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  formularioRegister: FormGroup;
  tipoPassword: string
  constructor(private userSV: UserService) {
    this.formularioRegister = new FormGroup({

      nombre: new FormControl(null, [
        Validators.required
      ]),
      apellidos: new FormControl(null, [
        Validators.required,
        Validators.maxLength(30)
      ]),
      dni: new FormControl(null, [
        Validators.required
      ]),
      email: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
      ]),
      password: new FormControl(null, [
        Validators.required
      ]),
      rol: new FormControl(null, [
        Validators.required
      ]),
      genero: new FormControl(null, [
        Validators.required
      ]),
      direccion: new FormControl(null, [
        Validators.required
      ]),
      nacimiento: new FormControl(null, [
        Validators.required
      ])
    })
    this.tipoPassword = 'password';
  }

  async onSubmit() {
    const response = await this.userSV.createUser(this.formularioRegister.value);
    this.formularioRegister.reset();
  }
  cambiarTipoPassword() {
    this.tipoPassword = this.tipoPassword === 'text' ? 'password' : 'text';
  }
  checkError(control: string, validator: string) {
    return this.formularioRegister.get(control)?.hasError(validator) && this.formularioRegister.get(control)?.touched;
  }
}
