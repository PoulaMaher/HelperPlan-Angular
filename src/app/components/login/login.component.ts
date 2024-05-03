import { Component } from '@angular/core';
import { Loginservice } from './LoginService/loginservice.service';
import { Loggeduser } from './LoggedUser/loggeduser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private LoginService: Loginservice, private router: Router) {}
  ApiErrors: string = '';
  LoggedUser: Loggeduser = new Loggeduser();
  LogUser() {
    this.LoginService.LogUser(this.LoggedUser).subscribe({
      next: (res) => {
        this.LoginService.DecodeUser(res['token'])
      },
      error: (err) => {
        console.log(err.error);
        this.ApiErrors = err.error;
      },
    });
  }
}
