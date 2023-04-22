import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginGuard } from 'src/app/guards/login.guard';
import { UserService } from 'src/app/services/user.service';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  male: any
  name: any
  constructor(
    private router: Router,
    public userService: UserService,
    private utilService: UtilsService
  ) {

  }

  async ngOnInit() {
    const obj = this.utilService.getToken()
    this.male = await this.isMale()
    const [user] = await this.userService.getUserById(obj.user_id)
    this.name = user.nombre;
  }
  onLogOut() {
    // Borro el token
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }


  async isMale() {
    const obj = this.utilService.getToken()
    const [genero] = await this.userService.getGenre(obj.user_id);
    console.log('GENERO', genero);
    console.log('OBJJ', obj);
    if (genero.genero === 'm') {
      return true
    }
    return false
  }
}
