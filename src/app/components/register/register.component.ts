import { Component } from '@angular/core';
import { UserRegister } from './UserRegister/user-register';
import { CommonModule } from '@angular/common';
import {
  FormGroup,
  FormsModule,
  FormControl,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MdbFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  RegisterForm = new FormGroup({
    Name: new FormControl(null, [Validators.required,Validators.minLength(5)]),
    NewPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z\\d]).{13,}$'),
    ]),
    ConfirmPassword: new FormControl(null, [
      Validators.required,
    ]),
    Email: new FormControl(null, Validators.required),
    Role: new FormControl(null, Validators.required),
    AgreeToAllTerms: new FormControl(false, Validators.requiredTrue),
  },this.LoginService.passwordMatchValidator);
  registeredUser: UserRegister = new UserRegister();
  constructor(public LoginService: Loginservice) {}
  AddUser(): void {
    this.LoginService.AddUser(this.RegisterForm.value['Role']!, {
      Name: this.RegisterForm.value['Name']!,
      Password: this.RegisterForm.value['NewPassword']!,
      Email: this.RegisterForm.value['Email']!,
    }).subscribe({
      next: (res) => {
        this.LoginService.LogUser({
          Email: this.RegisterForm.value['Email']!,
          Password: this.RegisterForm.value['NewPassword']!,
        }).subscribe({
          next: (res) => {
            this.LoginService.DecodeUser(res['token']);
          },
        });
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
