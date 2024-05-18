import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { PlanService } from '../../../../../services/plan.service';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IPlan } from '../../../../../models/IPlan';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-plan-edit',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './plan-edit.component.html',
  styleUrl: './plan-edit.component.css'
})
export class PlanEditComponent {
  plan!: IPlan;
  planID!: number;
  constructor(private httpClient: HttpClient, private planService: PlanService, private route: ActivatedRoute, private router:Router) {
    this.plan = {
<<<<<<< HEAD
      id: 0,
=======
      id:1,
>>>>>>> 84955c38fc86d52ab1873539b73917e8fbf7d194
      name: "",
      type: "",
      price: 0
    }
  }
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.planID = params['id'];
    });
  }

  onSubmit() {
      this.planService.UpdatePlan(this.plan, this.planID).subscribe((res) => {
      console.log(this.plan)
      console.log(res)
        this.router.navigate(['/dashboard/planDashboard']);
    })
  }
  back(): void {
    this.router.navigate(['/dashboard/planDashboard']);
  }
  
  }