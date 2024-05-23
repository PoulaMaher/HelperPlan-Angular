import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
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
import { AdminDashboardComponent } from './components/Admin-Dashboard/admin-dashboard/admin-dashboard.component';
import { PlanDashboardComponent } from './components/Admin-Dashboard/plan-dashboard/plan-dashboard.component';
import { EmployerDashboardComponent } from './components/Admin-Dashboard/employer-dashboard/employer-dashboard.component';
import { DashboardLayoutComponent } from './components/Admin-Dashboard/dashboard-layout/dashboard-layout.component';
import { PlanDetailsComponent } from './components/Admin-Dashboard/plan-dashboard/plan-details/plan-details/plan-details.component';
import { PlanEditComponent } from './components/Admin-Dashboard/plan-dashboard/plan-edit/plan-edit/plan-edit.component';
import { EmployerDetailsComponent } from './components/Admin-Dashboard/employer-dashboard/employer-details/employer-details.component';
import { EmployerEditComponent } from './components/Admin-Dashboard/employer-dashboard/employer-edit/employer-edit.component';
import { loginInGuard } from '../AuthRoutes/login-in.guard';
import { AddEmployerComponent } from '../app/components/Admin-Dashboard/employer-dashboard/add-employer/add-employer.component';
import { AddComponent } from '../app/components/Admin-Dashboard/plan-dashboard/add/add.component';
import { CandidateDetailsComponent } from './components/candidateCrud/Details/candidate-details/candidate-details.component';
import { DeleteCandidateComponent } from './components/candidateCrud/delete/delete-candidate/delete-candidate.component';
import { UpdatelayerComponent } from './components/post-resume/updatelayer/updatelayer/updatelayer.component';
import { CandidateDashboardComponent } from './components/Admin-Dashboard/candidate-dashboard/candidate-dashboard.component';
import { PaymentFailedComponent } from './components/payment-failed/payment-failed.component';
import { PaymentSuccessComponent } from './components/payment-success/payment-success.component';
import { AddAdminComponent } from './components/Admin-Dashboard/admin-dashboard/add-admin/add-admin.component';
import { EditAdminComponent } from './components/Admin-Dashboard/admin-dashboard/edit-admin/edit-admin.component';
import { AdminDetailsComponent } from './components/Admin-Dashboard/admin-dashboard/admin-details/admin-details.component';
import { ContactDetailsComponent } from './components/candidateCrud/Details/candidate-details/contact-details/contact-details.component';
export const routes: Routes = [
  {
    path: 'contactDetails',
    component: ContactDetailsComponent,
  },
  {
    path: 'success/:message',
    component: PaymentSuccessComponent,
  },
  {
    path: 'fail/:message',
    component: PaymentFailedComponent,
  },
  {
    path: 'details/:id',
    component: CandidateDetailsComponent,
  },
  {
    path: 'delete/:id',
    component: DeleteCandidateComponent,
  },
  { path: 'Payment-Failed', component: PaymentFailedComponent },
  { path: 'Payment-Success', component: PaymentSuccessComponent },
  { path: 'home', component: HomeComponent },
  { path: 'Login', canActivate: [loginInGuard], component: LoginComponent },
  { path: 'JobPage', component: JobPageComponent },
  { path: 'FindJob', component: FindJobComponent },
  { path: 'aboutus', component: AboutusComponent },
  {
    path: 'contactus',
    component: ContactusComponent,
  },
  {
    path: 'register',
    canActivate: [loginInGuard],
    component: RegisterComponent,
  },
  { path: 'pricing', component: PricingComponent },
  {
    path: 'AddJob',
    canActivate: [authRoutesGuard],
    component: PostJobComponent,
  },
  {
    path: 'candidateResume',
    canActivate: [authRoutesGuard],
    component: CandidateResumeComponent,
    children: [
      { path: 'Updatelayer/:id', component: UpdatelayerComponent },
      { path: 'candidateEducation', component: EducationWorkingComponent },
      {
        path: 'candidatePersonalInfo',
        component: PersonalInformationComponent,
      },
      {
        path: 'candidateProfessionalInfo',
        component: ProfessionalInformationComponent,
      },
      { path: 'AddDescription', component: AddDescriptionComponent },
    ],
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
  {
    path: 'candidatepage',
    component: WholeCandidateComponent,
  },
  { path: 'job', component: JobPageComponent },
  { path: 'contactDetails/:id', component: ContactDetailsComponent },
  { path: 'agency', component: WholeAgencyPageComponent },
  { path: 'Error', component: ErrorPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'dashboard',
    canActivate: [authRoutesGuard],
    component: DashboardLayoutComponent,
    children: [
      {
        path: '',
        component: CandidateDashboardComponent,
      },
      {
        path: 'adminDashboard',
        component: AdminDashboardComponent,
      },
      {
        path: 'addAdmin',
        component: AddAdminComponent,
      },
      {
        path: 'editAdmin/:id',
        component: EditAdminComponent,
      },
      {
        path: 'adminDetails/:id',
        component: AdminDetailsComponent,
      },
      {
        path: 'candidateDashboard',
        component: CandidateDashboardComponent,
      },
      {
        path: 'planDashboard',
        component: PlanDashboardComponent,
      },
      {
        path: 'employerDashboard',
        component: EmployerDashboardComponent,
      },
      {
        path: 'planDetails/:id',
        component: PlanDetailsComponent,
      },
      {
        path: 'planEdit/:id',
        component: PlanEditComponent,
      },
      {
        path: 'planAdd',
        component: AddComponent, //plan
      },
      {
        path: 'employerDetails/:id',
        component: EmployerDetailsComponent,
      },
      {
        path: 'employerEdit/:id',
        component: EmployerEditComponent,
      },
      {
        path: 'employerAdd',
        component: AddEmployerComponent,
      },
      {
        path: '**', // route every undefined route to the root of this feature
        redirectTo: ' ',
      },
      { path: '**', component: ErrorPageComponent }
    ],
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
