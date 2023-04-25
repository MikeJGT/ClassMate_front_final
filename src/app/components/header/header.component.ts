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
    public router: Router,
    public userService: UserService,
    private utilService: UtilsService
  ) {

  }

  async ngOnInit() {
    this.name = localStorage.getItem('generoUser');
    this.male = (localStorage.getItem('nombreUser') === 'm') ? true : false;
    const obj = this.utilService.getToken()
    const [user] = await this.userService.getUserById(obj.user_id)
    this.name = user.nombre;
  }

  ngDoCheck() {
    this.name = localStorage.getItem('nombreUser');
    this.male = (localStorage.getItem('generoUser') === 'm') ? true : false;
  }

  onLogOut() {
    // Borro el token
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }

}
