import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { IEmployer } from '../../../models/IEmployer';
import { environment } from '../../../../environments/environment.development';
import { EmployerService } from '../../../services/employer.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './employer-dashboard.component.html',
  styleUrl: './employer-dashboard.component.css'
})
export class EmployerDashboardComponent implements OnInit{
  EmployersList: IEmployer[] = [];
  constructor(private httpClient:HttpClient,private employerService:EmployerService) {
    
  }
  ngOnInit(): void {
    this.getAllJobs();
  }

  getAllJobs(): void {
    this.employerService.getAllEmployers().subscribe((Response) => {
      this.EmployersList = Response;
    });
  }

}
