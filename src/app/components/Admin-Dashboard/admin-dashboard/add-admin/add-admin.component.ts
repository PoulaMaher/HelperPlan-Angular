import { Component, OnInit } from '@angular/core';
import { IAdmin } from '../../../../models/IAdmin';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../../services/account.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-admin.component.html',
  styleUrl: './add-admin.component.css'
})
export class AddAdminComponent implements OnInit{
  admin!: IAdmin;
  constructor(private httpClient: HttpClient, private accountService: AccountService, private router: Router) {
  }
  ngOnInit(): void {
    this.admin = {
      id:0,
      userName: "",
      email: "",
      password: ""
    }
  }

  onSubmit() {
    this.accountService.AddAdmin(this.admin).subscribe((res) => {
      console.log(res);
      this.router.navigate(['/dashboard/adminDashboard']);
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/adminDashboard']);
  }

}
