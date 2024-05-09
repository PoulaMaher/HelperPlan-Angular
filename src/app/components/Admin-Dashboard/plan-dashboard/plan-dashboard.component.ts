import { Component } from '@angular/core';
import { PlanService } from '../../../services/plan.service';
import { IPlan } from '../../../models/IPlan';
import { CommonModule } from '@angular/common';
import { PlanDetailsComponent } from './plan-details/plan-details/plan-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plan-dashboard',
  standalone: true,
  templateUrl: './plan-dashboard.component.html',
  styleUrl: './plan-dashboard.component.css',
  imports: [CommonModule, PlanDetailsComponent],
})
export class PlanDashboardComponent {
  /**
   *
   */
  public plans!: IPlan[];
  private currentPlanId!: number;
  private currentPlan!: IPlan;

  constructor(private planService: PlanService, private router: Router) {}

  ngOnInit(): void {
    this.plans = this.planService.getAllPlans();
    this.currentPlanId = 1;
    this.currentPlan = this.planService.getPlanById(this.currentPlanId);
  }

  goToDetailsPage(cId: number): void {
    this.currentPlan = this.planService.getPlanById(cId);
    this.router.navigate(['dashboard/planDetails', cId]);
  }

  handleDelete(cId: number): void {}

  goToEditPage(cId: number): void {
    this.currentPlan = this.planService.getPlanById(cId);
    this.router.navigate(['dashboard/planEdit', cId]);
  }
}
