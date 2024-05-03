import { Routes, RouterModule } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { RegisterComponent } from './components/register/register.component';
import { PricingComponent } from './components/pricing/pricing.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { WholeCandidateComponent } from './components/candidatepage/whole-candidate/whole-candidate.component';
import { JobPageComponent } from './components/job-page/job-page.component';
import { WholeAgencyPageComponent } from './components/whole-agency-page/whole-agency-page.component';
import { ChangePasswordComponent } from './components/change-password/change-password.component';
import { FindJobComponent } from './components/job-page/find-job/find-job.component';
import { ErrorPageComponent } from './components/ErrorPage/error-page.component';
import { authRoutesGuard } from '../AuthRoutes/auth-routes.guard';
import { PostJobComponent } from './components/post-job/post-job.component';
import { PersonalInformationComponent } from './components/post-resume/personal-information/personal-information.component';
import { CandidateResumeComponent } from './components/post-resume/candidate-resume/candidate-resume.component';
import { EducationWorkingComponent } from './components/post-resume/education-working/education-working.component';
import { ProfessionalInformationComponent } from './components/post-resume/professional-information/professional-information.component';
import { AddDescriptionComponent } from './components/post-resume/candidate-resume/add-description/add-description.component';
export const routes: Routes = [
  { path: 'Login', component: LoginComponent },
  { path: 'JobPage', component: JobPageComponent },
  { path: 'Home', component: FindJobComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'contactus',
    canActivate: [authRoutesGuard],
    component: ContactusComponent,
  },
  { path: 'register', component: RegisterComponent },
  { path: 'pricing', component: PricingComponent },
  {
    path: 'AddJob',
    canActivate: [authRoutesGuard],
    component: PostJobComponent,
  },
  { path: 'candidateResume', component: CandidateResumeComponent,
  children:[
    { path: 'candidateEducation', component: EducationWorkingComponent },
    { path: 'candidatePersonalInfo', component: PersonalInformationComponent },
    { path: 'candidateProfessionalInfo', component: ProfessionalInformationComponent,},
    { path: 'AddDescription', component: AddDescriptionComponent,},


          ]
   },
  {
    path: 'myaccount',
    canActivate: [authRoutesGuard],
    children: [
      { path: 'profile', component: ProfileComponent },
      { path: 'changepassword', component: ChangePasswordComponent },
      { path: '', component: ProfileComponent },
      { path: '**', component: ProfileComponent },
    ],
  },
  { path: 'candidatepage', component: WholeCandidateComponent },
  { path: 'job', component: JobPageComponent },
  { path: 'agency', component: WholeAgencyPageComponent },
  { path: 'Error', component: ErrorPageComponent },
  // { path: '**', component: ErrorComponent }
];
