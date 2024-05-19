import { Component } from '@angular/core';
import { IAdmin } from '../../../models/IAdmin';
import { HttpClient } from '@angular/common/http';
import { AccountService } from '../../../services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})
export class AdminDashboardComponent {
  adminList: IAdmin[] = [];
  currentAdminID: number = 0;
  constructor(private httpClient: HttpClient, private accountService: AccountService, private router: Router) {
  }
  ngOnInit(): void {
    this.getAllEmps();
  }

  getAllEmps(): void {
    this.accountService.GetAllAdmins().subscribe((Response) => {
      this.adminList = Response;
      console.log(Response)
    });
  }

  handleDelete(id: number) { debugger
    this.currentAdminID = id;
    this.accountService.deleteAdmin(this.currentAdminID).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['dashboard/adminDashboard', this.currentAdminID]);
    window.location.reload();
  }
  goToEditPage(id: number) {
    this.currentAdminID = id;
    this.accountService.getAdmin(id).subscribe((res) => {
      console.log(res);
    });
    this.router.navigate(['dashboard/editAdmin',this.currentAdminID]);
  }
  goToDetailsPage(id: number) {
    this.currentAdminID = id;
    this.router.navigate(['dashboard/adminDetails', this.currentAdminID]);
  }
  goToAddPage() {
    this.router.navigate(['dashboard/addAdmin']);
  }
}
