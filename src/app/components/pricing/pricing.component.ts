import { Component } from '@angular/core';
import { IPlan } from '../../models/IPlan';
import { PlanService } from '../../services/plan.service';
import { PaymentService } from '../../services/payment.service';
import { ISubscribtionDto } from '../../models/isubscribtion-dto';
import { Router } from '@angular/router';
import { Loginservice } from '../login/LoginService/loginservice.service';
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
    employerId: 1,
    planId: 1,
    userId: 1,
    isActive: false,
  };

  IsLogged: boolean = false;
  Role:string = '';
  constructor(
    private planService: PlanService,
    private paymentService: PaymentService,
    private router: Router,
    public loginService: Loginservice
  ) {
    this.loginService.LoggedUser.subscribe({
      next: () => {
        if (this.loginService.LoggedUser.value != null) {
          this.Role =
            this.loginService.LoggedUser.value[
              'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
            ];
            this.IsLogged = true;
          } else {
          this.IsLogged = false;
          this.Role = '';
        }
      },
      error: () => {},
    });
  }

  ngOnInit(): void {
    this.planService.getAllPlans().subscribe((response) => {
      this.plansLst = response;
    });
  }
  handleSubscription(currentPlan: IPlan): void {

    if(this.loginService.IsLogged)
      {
        this.subscriptionData.planId = currentPlan.id;

        const date = new Date();
        this.subscriptionData.endDate.setDate(
          date.getDate()
        );
        this.subscriptionData.employerId = 1;
        this.subscriptionData.isActive = false;
        this.subscriptionData.userId = 1;
        this.paymentService
          .createSubscription(this.subscriptionData)
          .subscribe((respose) => {
            console.log(respose.url)
             window.location.href=respose.url;
          });
      }else{
        this.router.navigateByUrl('/Login')
      }

    this.subscriptionData.planId = currentPlan.id;
    const date = new Date();
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
    this.paymentService
      .createSubscription(this.subscriptionData)
      .subscribe((respose) => {
        console.log(respose.url);
        window.location.href = respose.url;
      });
  }
}
