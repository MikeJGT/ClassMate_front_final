import { Component } from '@angular/core';
import { User } from 'src/app/interfaces/user.interface';
import { ProfesorService } from 'src/app/services/profesor.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})

export class ListarUsuariosComponent {
  arrUsers: User[];

  constructor(private profeSV: ProfesorService) {
    this.arrUsers = []
  }
  async ngOnInit() {
    this.arrUsers = await this.profeSV.getUsers();
  }

}
