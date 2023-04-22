import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  mostrar: boolean

  constructor() {
    this.mostrar = true;
  }

  mostrarClick() {
    this.mostrar = false
  }
}
