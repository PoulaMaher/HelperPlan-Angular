import { Component } from '@angular/core';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { FormControl, FormGroup, Validators,ReactiveFormsModule } from '@angular/forms';
import { PhoneNumber } from 'libphonenumber-js';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [ReactiveFormsModule],
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
      Validators.required
    ),
    PhoneNumber: new FormControl(
      null,
      Validators.minLength(11)
    ),
  });
  constructor(public AuthService: Loginservice) {}
}
