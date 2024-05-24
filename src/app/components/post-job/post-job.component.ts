import { Component } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { AboutYouComponent } from './about-you/about-you.component';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobRequirmentComponent } from './job-requirment/job-requirment.component';
import { SubscribePublishComponent } from './subscribe-publish/subscribe-publish.component';
import { JobClass } from './JobClass/job-class';
import { PostJobService } from './post-job-service/post-job-service.service';
import { PricingComponent } from '../pricing/pricing.component';
import { Loginservice } from '../login/LoginService/loginservice.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-post-job',
  standalone: true,
  imports: [
    MatTabsModule,
    AboutYouComponent,
    JobDetailsComponent,
    JobRequirmentComponent,
    SubscribePublishComponent,
    MatButtonModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    PricingComponent,
  ],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css',
})
export class PostJobComponent {
  constructor(
    public PostJobService: PostJobService,
    private loginservice: Loginservice,
    private router:Router
  ) {
    this.job.EmployerId =
      loginservice.LoggedUser.value![
        'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
      ];
  }
  job = new JobClass();
  isOptional = false;
  AddJob() {
    this.PostJobService.AddJob(this.job).subscribe({
      next: () => {
        this.router.navigateByUrl('/job')
      },
      error: (error) => {
        console.log(error)
      },
    });
  }
}
