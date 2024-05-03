import { Component } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
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
import { JobDetailsClass } from './job-details/JobDetailsClass/job-details-class';
import { PostJobService } from './post-job-service/post-job-service.service';
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
  ],
  templateUrl: './post-job.component.html',
  styleUrl: './post-job.component.css',
})
export class PostJobComponent {
  AssignJobDetails($event: JobDetailsClass) {
    this.job.JobDetails = $event;
    console.log($event);
  }
  PostJobService: PostJobService = new PostJobService();
  job = new JobClass();
  isOptional = false;
  constructor(private _formBuilder: FormBuilder) {}
}
