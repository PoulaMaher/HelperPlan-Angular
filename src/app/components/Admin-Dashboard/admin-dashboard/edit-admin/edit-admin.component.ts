import { Component } from '@angular/core';
import { IAdmin } from '../../../../models/IAdmin';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../../../../services/account.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-admin',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './edit-admin.component.html',
  styleUrl: './edit-admin.component.css'
})
export class EditAdminComponent {
  currentAdminId!: number;
  admin!: IAdmin;

  constructor(private router: Router, private accountService: AccountService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentAdminId = params['id'];
    });

    this.accountService.getAdmin(this.currentAdminId).subscribe((res) => {
      console.log(res)
      this.admin = res;
    })
  }

  onSubmit() {
    this.accountService.UpdateAdmin(this.currentAdminId, this.admin).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/dashboard/adminDashboard']);
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/adminDashboard']);
  }
}
