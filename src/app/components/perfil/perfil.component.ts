import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {
  arrPerfil: any[]
  constructor(
    private userService: UserService,
    private utilsService: UtilsService
  ) {
    this.arrPerfil = []
  }
  async ngOnInit() {
    const token = await this.utilsService.getToken();
    const userId = token.user_id;
    this.arrPerfil = await this.userService.getUserById(userId);
    console.log('DESDE PERFIL ', this.arrPerfil);
    localStorage.setItem('nombreUser', this.arrPerfil[0].nombre)
    localStorage.setItem('generoUser', this.arrPerfil[0].genero)
  }
}
