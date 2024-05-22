import { Component } from '@angular/core';
import { IPlan } from '../../models/IPlan';
import { PlanService } from '../../services/plan.service';
import { PaymentService } from '../../services/payment.service';
import { ISubscribtionDto } from '../../models/isubscribtion-dto';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  public plansLst!: IPlan[];
  public subscriptionData: ISubscribtionDto = {
    id: 0,
    endDate: new Date(),
    employerId: 0,
    planId: 1,
    userId: 1,
    isActive: false,
  };

  constructor(
    private planService: PlanService,
    private paymentService: PaymentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe((response) => {
      this.plansLst = response;
    });
  }

  handleSubscription(currentPlan: IPlan): void {
    // console.log(currentPlan.id);
    // console.log(this.subscriptionData.planId);
    this.subscriptionData.planId = currentPlan.id;

    const date = new Date();
    // this.subscriptionData.endDate.setDate(
    //   date.getDate() + currentPlan.duration
    // );
    this.subscriptionData.endDate.setDate(
      date.getDate()
    );
    this.subscriptionData.employerId = 1;
    this.subscriptionData.isActive = false;
    this.subscriptionData.userId = 1;
    this.paymentService.createSubscription(this.subscriptionData).subscribe(
      {
        next: (respose) => {
          window.location.replace(respose['url']) 
        },
        error: (err) => {
          console.log(err);
        },
      }
    );
  }
}
