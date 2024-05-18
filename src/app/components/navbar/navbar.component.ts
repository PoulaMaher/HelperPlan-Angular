import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  Role: string = '';
  IsLogged: boolean = false;
  constructor(public loginService: Loginservice) {
    this.loginService.LoggedUser.subscribe({
      next: () => {
        if (this.loginService.LoggedUser.value != null) {
          this.Role =
            this.loginService.LoggedUser.value[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
            this.IsLogged = true;
          } else {
          this.IsLogged = false;
          this.Role = '';
        }
      },
      error: () => {},
    });
  }
}
