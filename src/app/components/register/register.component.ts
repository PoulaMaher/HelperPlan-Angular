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
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, MdbFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  RegisterForm = new FormGroup(
    {
      UserName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      FirstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      LastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      NewPassword: new FormControl(null, [
        Validators.required,
        Validators.pattern('^(?=.*[A-Z])(?=.*\\d)(?=.*[^a-zA-Z\\d]).{13,}$'),
      ]),
      ConfirmPassword: new FormControl(null, [Validators.required]),
      Email: new FormControl(null, [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,}$'),
      ]),
      Role: new FormControl(null, Validators.required),
      AgreeToAllTerms: new FormControl(false, Validators.requiredTrue),
    },
    this.LoginService.passwordMatchValidator
  );
  registeredUser: UserRegister = new UserRegister();
  constructor(public LoginService: Loginservice) {}
  AddUser(): void {
    this.LoginService.AddUser(this.RegisterForm.value['Role']!, {
      UserName: this.RegisterForm.value['UserName']!,
      FirstName: this.RegisterForm.value['FirstName']!,
      LastName: this.RegisterForm.value['LastName']!,
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
            this.LoginService.RouteConsideringToRole();
          },
        });
      },
      error: (err) => {
        err.error.msg.forEach((element: any) => {
          Swal.fire({
            title: 'Error',
            text:element.description,
            showCancelButton: true,
          });
        });
      },
    });
  }
}
