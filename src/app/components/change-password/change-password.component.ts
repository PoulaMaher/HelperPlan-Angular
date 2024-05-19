import { Component } from '@angular/core';
import { Loginservice } from '../login/LoginService/loginservice.service';
import {
  FormGroup,
  FormControl,
  Validators,
  ReactiveFormsModule,
  AbstractControl,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-change-password',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './change-password.component.html',
  styleUrl: './change-password.component.css',
})
export class ChangePasswordComponent {
  PasswordForm = new FormGroup(
    {
      OldPassword: new FormControl('', Validators.required),
      NewPassword: new FormControl('', Validators.required),
      ConfirmPassword: new FormControl('', Validators.required),
    },
    { validators: this.AuthService.passwordMatchValidator }
  );
  constructor(public AuthService: Loginservice) {}
  UpdateUserPassword() {
    this.AuthService.UpdateUserPassword({
      OldPassword: this.PasswordForm.value['OldPassword']!,
      NewPassword: this.PasswordForm.value['NewPassword']!,
    }).subscribe({
      next: (res) => {
        alert('Password Updated Successfully');
      },
      error: (err) => {
        alert('Failed To Update Password');
      },
    });
    this.AuthService.RouteConsideringToRole();
  }
}
