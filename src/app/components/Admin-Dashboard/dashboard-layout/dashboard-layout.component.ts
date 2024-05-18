import { Component } from '@angular/core';
import { EmployerDashboardComponent } from '../employer-dashboard/employer-dashboard.component';
import { PlanDashboardComponent } from '../plan-dashboard/plan-dashboard.component';
import { AdminDashboardComponent } from '../admin-dashboard/admin-dashboard.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CandidateDashboardComponent } from '../candidate-dashboard/candidate-dashboard.component';


@Component({
  selector: 'app-dashboard-layout',
  standalone: true,
  templateUrl: './dashboard-layout.component.html',
  styleUrl: './dashboard-layout.component.css',
  imports: [
    CandidateDashboardComponent,
    EmployerDashboardComponent,
    PlanDashboardComponent,
    AdminDashboardComponent,
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
  ],
})
export class DashboardLayoutComponent {}
