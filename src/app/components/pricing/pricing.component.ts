import { Component } from '@angular/core';
import { IPlan } from '../../models/IPlan';
import { PlanService } from '../../services/plan.service';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  public plansLst!: IPlan[];

  constructor(private planService: PlanService) {}

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe((response) => {
      this.plansLst = response;
    });
  }

  choosePlan(currentPlan: IPlan): void {}
}
