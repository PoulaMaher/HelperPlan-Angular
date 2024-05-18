import { Component, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatStepperModule} from '@angular/material/stepper';
//import * as stepperComponent from '../stepper/stepper.component';
import { CdkStepperModule } from '@angular/cdk/stepper';

import { NavbarComponent } from '../../navbar/navbar.component';
import { EducationWorkingComponent } from '../education-working/education-working.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonalInformationComponent } from '../personal-information/personal-information.component';
import { ProfessionalInformationComponent } from '../professional-information/professional-information.component';
import { FcandidateService } from '../../../services/fcandidate.service';

@Component({
  selector: 'app-candidate-resume',
  standalone: true,
  imports: [RouterOutlet,RouterLink,
    CdkStepperModule,

   PersonalInformationComponent,
   ProfessionalInformationComponent,
  EducationWorkingComponent,
  MatStepperModule,
  ReactiveFormsModule
  ],

  templateUrl: './candidate-resume.component.html',
  styleUrl: './candidate-resume.component.css',

})
export class CandidateResumeComponent implements OnDestroy {

constructor(private candserv:FcandidateService){

}
  ngOnDestroy(): void {
    this.candserv.mycandidate= this.candserv.resetCandidate();
  }





}
