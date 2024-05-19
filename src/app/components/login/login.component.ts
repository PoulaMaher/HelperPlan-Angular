import { Component } from '@angular/core';
import { Loginservice } from './LoginService/loginservice.service';
import { Loggeduser } from './LoggedUser/loggeduser';
import { FormControl, FormGroup, FormsModule,Validators,ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, RouterModule,ReactiveFormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  LoginForm=new FormGroup({
    Email:new FormControl(null,Validators.required),
    Password: new FormControl(null, Validators.required),
  })
  constructor(private LoginService: Loginservice, private router: Router) {}
  LoggedUser: Loggeduser = new Loggeduser();
  LogUser() {
    this.LoginService.LogUser({Email:this.LoginForm.value['Email']!,Password:this.LoginForm.value['Password']!}).subscribe({
      next: (res) => {
        this.LoginService.DecodeUser(res['token'])
        this.LoginService.RouteConsideringToRole()
      },
      error: (err) => {
      },
    });
  }
}
