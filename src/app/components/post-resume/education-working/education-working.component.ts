import { Component, Input } from '@angular/core';
import { WorkingExperienceComponent } from '../Post-Resume-Spares/Education-Working/working-experience/working-experience.component';
import { EducationExperienceComponent } from '../Post-Resume-Spares/Education-Working/education-experience/education-experience.component';
import { AddWorkExperienceComponent } from '../Post-Resume-Spares/Education-Working/add-work-experience/add-work-experience.component';
import { AddEducationExperienceComponent } from '../Post-Resume-Spares/Education-Working/add-education-experience/add-education-experience.component';
import { Workingexperience } from '../Post-Resume-Spares/Education-Working/WorkingExperienceClass/workingexperience';
import { Educationexperience } from '../Post-Resume-Spares/Education-Working/EducationExperienceClass/educationexperience';
import { FormsModule } from '@angular/forms';
import { MatSelectComponent } from '../Post-Resume-Spares/Inputs/mat-select/mat-select.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FcandidateService } from '../../../services/fcandidate.service';
import { MatInputModule } from '@angular/material/input';
@Component({
  selector: 'app-education-working',
  standalone: true,
  templateUrl: './education-working.component.html',
  styleUrls: [
    '../general-style.css',
    './education-working.component.css',
  ],
  imports: [
    MatSelectComponent,
    FormsModule,
    WorkingExperienceComponent,
    EducationExperienceComponent,
    AddWorkExperienceComponent,
    AddEducationExperienceComponent,
    MatInputModule,
    RouterLink,
    RouterOutlet
  ],
})
export class EducationWorkingComponent {
  constructor(private candService:FcandidateService){
    debugger
   this.handlebinding()
  }
  UpdateWorkingExperience($event: any) {
    let index = $event.index
    delete $event.index
    this.WorkingExperiences[index] = $event
  }
  UpdateEducationExperience($event: any) {
    let index = $event.index
    delete $event.index
    this.EducationExperiences[index] = $event
  }
  DeleteEducationExperience(DeletedEducationExperience: Educationexperience) {
    let index = this.EducationExperiences.findIndex(
      (value) => value === DeletedEducationExperience
    );
    this.EducationExperiences.splice(index, 1);
  }
  DeleteWorkingExperience(DeletedWorkingExperience: Workingexperience) {
    let index = this.WorkingExperiences.findIndex(
      (value) => value === DeletedWorkingExperience
    );
    this.WorkingExperiences.splice(index, 1);
  }
  SaveWorkExperience(NewWorkingExperience: Workingexperience) {
    this.WorkingExperiences.push(NewWorkingExperience);
  }

  SaveEducationExperience(NewEducationexperience: Educationexperience) {
    this.EducationExperiences.push(NewEducationexperience);
  }
  onCommentChange(des:any){
    console.log(des.target.value);
    this.candService.mycandidate.description=des.target.value
  }

  WorkingDisplay: boolean = false;
  EducationDisplay: boolean = false;

  ToggleWorkingDisplay(): void {
    this.WorkingDisplay = !this.WorkingDisplay;
  }
  ToggleEducationDisplay(): void {
    this.EducationDisplay = !this.EducationDisplay;
  }
  handlebinding(){
    if(this.candService.mycandidate.experiences[0].jobPosition.length!=0)
      {

    this.candService.mycandidate.experiences.forEach(experience=>{
          this.wrkexp.StartDate= new Date(experience.startYear)
          this.wrkexp.EndDate=new Date(experience.endYear)
          this.wrkexp.EmployerType=experience.employerType
          this.wrkexp.JobPosition=experience.jobPosition
          this.wrkexp.WorkingCountry=experience.workingCountry
          this.wrkexp.Duties=experience.duties.split(',')
          this.WorkingExperiences.push(this.wrkexp)
    })
      }
      if(this.candService.mycandidate.educations[0].educationLevel.length!=0)
        {

      this.candService.mycandidate.educations.forEach(education=>{
            this.eduexp.Education= education.educationLevel
            this.eduexp.CompletionYear=education.completionYear.toString()
            this.eduexp.CourseDuration=education.crsDuration
            this.eduexp.HaveCompletedCourse=education.hasComplete
            this.EducationExperiences.push(this.eduexp)
      })
        }

  }
  @Input() WorkingExperiences: Workingexperience[] = [



  ];
  @Input() EducationExperiences: Educationexperience[] = [

  ];
  wrkexp:Workingexperience=new Workingexperience
  eduexp:Educationexperience=new Educationexperience
  Options: string[] = ['full', 'part', 'temporary'];
}
