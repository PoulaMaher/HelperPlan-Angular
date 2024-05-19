import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlanService } from '../../../../services/plan.service';
import { IPlan } from '../../../../models/IPlan';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  plan!: IPlan;
  constructor(
    private httpClient: HttpClient,
    private planService: PlanService,
    private router: Router
  ) {
    this.plan = {
      id: 0,
      name: '',
      type: '',
      price: 0,
      duration: 1,
    };
  }

  onSubmit() {
    this.planService.addPlan(this.plan).subscribe((res) => {
      console.log(this.plan);
      console.log(res);
      this.router.navigate(['/dashboard/planDashboard']);
    });
  }

  back(): void {
    this.router.navigate(['/dashboard/planDashboard']);
  }
}
