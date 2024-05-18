import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { MatSelectComponent } from '../../Inputs/mat-select/mat-select.component';
import { ButtonselectorComponent } from '../../Inputs/buttonselector/buttonselector.component';
import { DatepickerComponent } from '../../Inputs/datepicker/datepicker.component';
import { Workingexperience } from '../WorkingExperienceClass/workingexperience';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from '../../Inputs/slide-toggle/slide-toggle.component';
import { MultipleChoiceComponent } from '../../Inputs/multiple-choice/multiple-choice.component';
import { IExperience } from '../../../../../models/IExperience';
import { FcandidateService } from '../../../../../services/fcandidate.service';
import { ICandidates } from '../../../../../models/icandidates';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { ProfessionalInformationDataProviderService } from '../../Data-Provider/Professional-Information-Data-Provider/professional-information-data-provider.service';
import { PersonalInformationComponent } from '../../../personal-information/personal-information.component';
import { OptionsOfJobsAndCandidate } from '../../../../OptionsOfJobsAndCandidates/options-of-jobs-and-candidate';
import { PersonalInformationDataProviderService } from '../../Data-Provider/Personal-Information-Data-Provider/personal-information-data-provider.service';
import { ProfessionalInformationComponent } from '../../../professional-information/professional-information.component';
@Component({
  selector: 'app-add-work-experience',
  standalone: true,
  imports: [
    MatSelectComponent,
    ButtonselectorComponent,
    DatepickerComponent,
    SlideToggleComponent,
    MultipleChoiceComponent,
    FormsModule,
    CommonModule,
    MdbFormsModule
  ],
  templateUrl: './add-work-experience.component.html',
  styleUrl: './add-work-experience.component.css',
})
export class AddWorkExperienceComponent {
 exp!:IExperience
 mycand:ICandidates
 flag1:number = 0
 stringflag:string[]=[]
 constructor(private candservice:FcandidateService,
  public Data:PersonalInformationDataProviderService,
  public data:ProfessionalInformationDataProviderService )
    {
      this.mycand=candservice.mycandidate
      this.exp=this.expfactory()
    }

  expfactory()
  {
    return{
      id:0,
      jobPosition:'',
      workingCountry: '',
      startYear:new Date(),
      endYear:new Date(),
      employerType: '',
      duties: '',
      hasLetterRef: false,
      candidateID: 0,
      //candidate:null

    }
  }

  SetDuties(Duty: any) {
    //this.NewWorkExperience.Duties.push(Duty);
    this.stringflag=Duty
    this.exp.duties=Duty.join(',')
    console.log(this.exp.duties)
  }
  DeleteDuties(Duty: any) {
    let index = this.stringflag.findIndex((x) => x === Duty);
    this.stringflag.splice(index,1);
    Duty=this.stringflag
    this.exp.duties=Duty.join(',')
    console.log(this.exp.duties)

  }
  HaveLetter(HaveReferenceLetter: boolean) {
    this.exp.hasLetterRef=HaveReferenceLetter;

  }
  SetEndYear(EndDate: Date) {

    this.exp.endYear=EndDate;

  }
  SetStartYear(StartDate: Date) {
    this.exp.startYear=StartDate;

  }
  SetEmployerType(EmployerType: string) {
    this.exp.employerType=EmployerType;

  }
  SetWorkingCompany(WorkingCompany: any) {
    this.exp.workingCountry=WorkingCompany;
  }
  SetJopPosition(JopPosition: any) {
      //console.log(this.exp.JobPosition)
    this.exp.jobPosition=JopPosition;
    //console.log(this.exp.JobPosition)

  }
  @Input() PlaceHolder : string =''
  @Input() RequiredWorkingToEdit : Workingexperience =new Workingexperience();
  @Output() OnClose = new EventEmitter<boolean>();
  @Output() OnSave = new EventEmitter<Workingexperience>();
  Options: string[] = ['full', 'part', 'temporary'];
  NewWorkExperience: Workingexperience = new Workingexperience();
  SaveAndDestroy()
  {
    this.OnSave.emit(this.NewWorkExperience)
    this.OnClose.emit(true);
    this.NewWorkExperience = new Workingexperience();
    if(this.mycand.experiences[0].jobPosition.length==0)
      {

        this.mycand.experiences[0] = Object.assign({}, this.exp);
       // console.log(this.mycand)
        console.log("00000")

      }
      else{
        console.log(this.exp)
        this.mycand.experiences.push(this.exp)
        console.log(this.mycand)

        //console.log(this.mycand)
      }
  }
}

