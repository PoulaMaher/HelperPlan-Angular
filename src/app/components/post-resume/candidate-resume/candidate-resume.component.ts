import { Component } from '@angular/core';
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
export class CandidateResumeComponent {

constructor(private fb: FormBuilder){}


// resumeForm = this.fb.group({
//   personalInfoForm: this.fb.group({
//     fname: ['', Validators.required],
//     lname: ['', Validators.required],
//     phoneNumber: ['', Validators.required],
//     age: ['', Validators.required],
//     description: ['', Validators.required],
//     gender: ['', Validators.required],
//     location: ['', Validators.required],
//   }),
//  educationWorkingForm: this.fb.group({
//   educationLevel: ['', Validators.required],
//   position: ['', Validators.required],
//   workexperience: ['', Validators.required],
//   jobType: ['', Validators.required],
//   workStatus: ['', Validators.required],
//   exepectedSalary: ['', Validators.required],
//   educations: ['', Validators.required],
//   experiences:['', Validators.required],
//   languages:['', Validators.required],
//   mainSkills:['', Validators.required],
//   otherSkills:['', Validators.required],
//   }),
// professionalInfoForm: this.fb.group({
//   contactEmail: ['', Validators.email],
//   photoURL: ['', Validators.required],
//   noKids: ['',Validators.required],
//   martialStatus: ['',Validators.required],
//   nationality: ['',Validators.required],
//   religion: ['',Validators.required],
//   whatappNumber: ['',Validators.required],
//   hasPassport: ['',Validators.required],
//   availabilityDate: ['',Validators.required],
//   })
// })


  //createCandidateForm(candidate: ICandidates): FormGroup {
    //     return this.fb.group({
    //       id: [candidate.id],
    // /      phoneNumber: [candidate.phoneNumber, Validators.required],
    // /      phoneNumberConfirmed: [candidate.phoneNumberConfirmed],
    // /      fname: [candidate.fname, Validators.required],
    //  /     lname: [candidate.lname, Validators.required],
    //   /    location: [candidate.location, Validators.required],
    //   /    description: [candidate.description],
    //    /   position: [candidate.position],
    //    /   contactEmail: [candidate.contactEmail, Validators.email],
    //     /  photoURL: [candidate.photoURL],
    //     /  age: [candidate.age, Validators.min(0)],
    //     /  gender: [candidate.gender],
    //     /  noKids: [candidate.noKids],
    //     /  workexperience: [candidate.workexperience],
    //    /   martialStatus: [candidate.martialStatus],
    //    /   nationality: [candidate.nationality],
    //     /  religion: [candidate.religion],
    //     /  educationLevel: [candidate.educationLevel],
    //    /   whatappNumber: [candidate.whatappNumber],
    //   /    hasPassport: [candidate.hasPassport],
    //  /     jobType: [candidate.jobType],
    //   /    workStatus: [candidate.workStatus],
    //    /   availabilityDate: [candidate.availabilityDate],
    //     /  exepectedSalary: [candidate.exepectedSalary],
    //       perferedDay: [candidate.perferedDay],
    //       accomodationPref: [candidate.accomodationPref],
    //     /  experiences: this.createExperienceFormArray(candidate.experiences),
    //    /   educations: this.createEducationFormArray(candidate.educations),
    //     /  mainSkills: this.createMainSkillsFormArray(candidate.mainSkills),
    //    /   languages: this.createLanguagesFormArray(candidate.languages),
    //   /    otherSkills: this.createOtherSkillsFormArray(candidate.otherSkills),
    //  /     cookingSkills: this.createCookingSkillsFormArray(candidate.cookingSkills)
    //     });
    //   }
}
