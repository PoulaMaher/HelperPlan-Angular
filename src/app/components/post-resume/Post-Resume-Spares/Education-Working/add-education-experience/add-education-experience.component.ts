import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatSelectComponent } from '../../Inputs/mat-select/mat-select.component';
import { ButtonselectorComponent } from '../../Inputs/buttonselector/buttonselector.component';
import { DatepickerComponent } from '../../Inputs/datepicker/datepicker.component';
import { Educationexperience } from '../EducationExperienceClass/educationexperience';
import { FormsModule } from '@angular/forms';
import { SlideToggleComponent } from '../../Inputs/slide-toggle/slide-toggle.component';
import { ProfessionalInformationDataProviderService } from '../../Data-Provider/Professional-Information-Data-Provider/professional-information-data-provider.service';
import { IEducation } from '../../../../../models/IEducation';
import { FcandidateService } from '../../../../../services/fcandidate.service';
import { ICandidates } from '../../../../../models/icandidates';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-add-education-experience',
  standalone: true,
  imports: [
    MatSelectComponent,
    ButtonselectorComponent,
    DatepickerComponent,
    SlideToggleComponent,
    FormsModule,
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './add-education-experience.component.html',
  styleUrl: './add-education-experience.component.css',
})
export class AddEducationExperienceComponent{
  edu!:IEducation
  mycand:ICandidates
  constructor(private candservice:FcandidateService ,public data:ProfessionalInformationDataProviderService)
  {
    this.edu=this.EducationFactory()
    this.mycand=candservice.mycandidate
  }
  EducationFactory(){
    return{
      id:0,
      educationLevel :'',
      crsDuration:'',
      hasComplete:false,
      completionYear: new Date(),
      candidateID:0
    }
  }
  CompletedCourse(HaveCompletedCourse: boolean) {
    //this.NewEducationExperience.HaveCompletedCourse = HaveCompletedCourse;
    this.edu.hasComplete=HaveCompletedCourse
  }
  SetCompletionYear(CompletionYear: string) {

    this.edu.completionYear.setFullYear(parseInt(CompletionYear))
  }
  SetCourseDuration(CourseDuration: string) {
   // this.NewEducationExperience.CourseDuration = CourseDuration;
    this.edu.crsDuration=CourseDuration
  }
  SetEducation(Education: string) {
   // this.NewEducationExperience.Education = Education;
   this.edu.educationLevel =Education
  }
  SaveAndDestroy()
  {
    this.OnSave.emit(this.NewEducationExperience);
    this.OnClose.emit();
    this.NewEducationExperience = new  Educationexperience();
    if(this.mycand.educations[0].educationLevel.length==0)
      {

        this.mycand.educations[0] = Object.assign({}, this.edu);
       // console.log(this.mycand)
        console.log("00000")

      }
      else{
        console.log(this.edu)
        this.mycand.educations.push(this.edu)
        console.log(this.mycand)

        //console.log(this.mycand)
      }
  }
  @Input() PlaceHolder : string =''
  @Input() RequiredEducationToEdit : Educationexperience ={} as Educationexperience ;
  @Output() OnClose = new EventEmitter<boolean>();
  @Output() OnSave = new EventEmitter<Educationexperience>();
  NewEducationExperience: Educationexperience = {} as Educationexperience;
  Options: string[] = ['full', 'part', 'temporary'];
}
