import { Component, OnInit } from '@angular/core';
import { Registerservice } from './RegisterService/registerservice.service';
import { UserRegister } from './UserRegister/user-register';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  registeredUser: UserRegister = new UserRegister();
  Role: string = '';
  constructor(public registerService: Registerservice) {}
  AddUser(): void {
    this.registerService.AddUser(this.Role, this.registeredUser).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: () => {},
    });
  }
}
