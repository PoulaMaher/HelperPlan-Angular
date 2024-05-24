import { Component } from '@angular/core';
import { Loginservice } from '../login/LoginService/loginservice.service';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';
import { Changes } from './ChangesClass/changes';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
})
export class ProfileComponent {
  ProfileForm = new FormGroup({
    Role: new FormControl(
      this.AuthService.LoggedUser.value![
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ],
      Validators.required
    ),
    Name: new FormControl(
      this.AuthService.LoggedUser.value![
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name'
      ],
      Validators.required
    ),
    Email: new FormControl(
      this.AuthService.LoggedUser.value![
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress'
      ],
      [Validators.required, Validators.email]
    ),
    Location: new FormControl(
      this.AuthService.LoggedUser.value![
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/country'
      ],
      Validators.required
    ),
    PhoneNumber: new FormControl(
      this.AuthService.LoggedUser.value![
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/mobilephone'
      ],
      [Validators.required, Validators.minLength(11)]
    ),
    Password: new FormControl(null, Validators.required),
  });
  UpdateUser(changes: Changes) {
    this.AuthService.UpdateUser(changes).subscribe({
      next: (res) => {
        this.AuthService.DecodeUser(res['token']);
        this.AuthService.RouteConsideringToRole()
        Swal.fire({
          title: 'Done',
          text:'Account Updated Successfully',
          showCancelButton: true,
        });  
      },
      error: (error) => {
        Swal.fire({
          title: 'Error',
          text:error.error.msg,
          showCancelButton: true,
        });  
      },
    });
  }
  constructor(public AuthService: Loginservice) {
    AuthService.GetUserDetails().subscribe({
      next: (res) => {
        console.log(res)
        this.ProfileForm.controls['Location'].setValue(res.location);
        this.ProfileForm.controls['PhoneNumber'].setValue(res.mobileNumber);
        this.ProfileForm.controls['Email'].setValue(res.email);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
