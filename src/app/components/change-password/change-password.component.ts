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
import Swal from 'sweetalert2';

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
        Swal.fire({
          title: 'Done',
          text:'Password Updated Successfully',
          showCancelButton: true,
        });  
      },
      error: (err) => {
        Swal.fire({
          title: 'Error',
          text:err.error.msg,
          showCancelButton: true,
        });  
      },
    });
    this.AuthService.RouteConsideringToRole();
  }
}
