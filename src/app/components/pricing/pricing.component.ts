import { Component } from '@angular/core';
import { IPlan } from '../../models/IPlan';
import { PlanService } from '../../services/plan.service';
import { PaymentService } from '../../services/payment.service';
import { ISubscribtionDto } from '../../models/isubscribtion-dto';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [],
  templateUrl: './pricing.component.html',
  styleUrl: './pricing.component.css',
})
export class PricingComponent {
  public plansLst!: IPlan[];
  public subscriptionData!: ISubscribtionDto;

  constructor(
    private planService: PlanService,
    private paymentService: PaymentService
  ) {}

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe((response) => {
      this.plansLst = response;
    });
  }

  handleSubscription(currentPlan: IPlan): void {
    this.subscriptionData.planId = currentPlan.id;
  }
}
