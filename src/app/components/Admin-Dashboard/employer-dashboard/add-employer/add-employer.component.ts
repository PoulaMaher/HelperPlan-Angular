import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { IEmployer } from '../../../../models/IEmployer';
import { HttpClient } from '@angular/common/http';
import { EmployerService } from '../../../../services/employer.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-employer',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './add-employer.component.html',
  styleUrl: './add-employer.component.css'
})
export class AddEmployerComponent{
  employee!: IEmployer; 
  constructor(private httpClient: HttpClient, private employerService: EmployerService, private router: Router) {
  }

  ngOnInit(): void {
    // Initialize the employee object with default values
    this.employee = {
      id: 0,
      fname: "",
      lname: "",
      phoneNumber: "",
      location: "",
      dayOff: "",
      accomodation: "",
      salary: 0,
      kidsNo: 0,
      adultNo: 0,
      hasBet: false,
      description: "",
      title: "",
    };
  }

  onSubmit() {
    this.employerService.createEmployer(this.employee).subscribe((res) => {
      console.log(this.employee)
      console.log(res)
      this.router.navigate(['/dashboard/employerDashboard']);
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/employerDashboard']);
  }
}
