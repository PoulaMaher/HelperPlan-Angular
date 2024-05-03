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
  LoggedUser: any;
  Role: string = '';
  constructor(public loginService: Loginservice) {
    this.loginService.LoggedUser.subscribe({
      next: () => {
        if (this.loginService.LoggedUser.value != null) {
          this.LoggedUser = this.loginService.LoggedUser;
          this.Role =
            this.LoggedUser._value[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
        } else {
          this.LoggedUser = '';
          this.Role = '';
        }
      },
      error: () => {},
    });
  }
}
