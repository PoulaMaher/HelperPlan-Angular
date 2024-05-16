import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPlan } from '../../../../../models/IPlan';
import { PlanService } from '../../../../../services/plan.service';

@Component({
  selector: 'app-plan-details',
  standalone: true,
  imports: [],
  templateUrl: './plan-details.component.html',
  styleUrl: './plan-details.component.css',
})
export class PlanDetailsComponent {
  private currentId!: number;
  public currentPlan!: IPlan;
  constructor(
    private route: ActivatedRoute,
    private planService: PlanService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.planService.getPlanById(this.currentId).subscribe(plan =>{
      this.currentPlan = plan;
    });
  }
  back(): void {
    this.router.navigate(['/dashboard/planDashboard']);
  }
}
