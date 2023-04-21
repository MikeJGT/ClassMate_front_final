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

  constructor(
    private router: Router,
    public userService: UserService,
  ) {

  }

  onLogOut() {
    // Borro el token
    localStorage.removeItem('token');
    this.router.navigate(['/login'])
  }
}
