import { Component, OnInit } from '@angular/core';
import { MatSelectComponent } from '../Post-Resume-Spares/Inputs/mat-select/mat-select.component';
import { multipleselectcomponent } from '../Post-Resume-Spares/Inputs/multiple-select/multiple-select.component';
import { DatepickerComponent } from '../Post-Resume-Spares/Inputs/datepicker/datepicker.component';
import { InputComponent } from '../Post-Resume-Spares/Inputs/input/input.component';
import { MultipleChoiceComponent } from '../Post-Resume-Spares/Inputs/multiple-choice/multiple-choice.component';
import { ProfessionalInformationDataProviderService } from '../Post-Resume-Spares/Data-Provider/Professional-Information-Data-Provider/professional-information-data-provider.service';
import { ICandidates } from '../../../models/icandidates';
import { FcandidateService } from '../../../services/fcandidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';
@Component({
  selector: 'app-professional-information',
  standalone: true,
  providers: [],
  imports: [
    MatSelectComponent,
    multipleselectcomponent,
    DatepickerComponent,
    InputComponent,
    MultipleChoiceComponent,
    CommonModule,
    FormsModule,
    RouterLink,
    RouterOutlet

  ],
  templateUrl: './professional-information.component.html',
  styleUrls: [
    '../general-style.css',
    './professional-information.component.css',
  ],
})
export class ProfessionalInformationComponent implements OnInit {
  Data: ProfessionalInformationDataProviderService =
    new ProfessionalInformationDataProviderService();
    flag1:number=0
    flag2:number=0
    flag3:number=0
    flag4:number=0
    disabledflag:number=0;
    myflag:boolean=false;
    mycand!:ICandidates
    mylangs:string[]=[]
    mymainskills:string[]=[]
    myotherskills:string[]=[]
    mycookingskills:string[]=[]
    constructor(private candservice:FcandidateService)
    {
      this.mycand=candservice.mycandidate
      this.handlebinding()

    }
  ngOnInit(): void {
this.flagy()

  }
    languagefactory(namee:string[])
    {
      return {
      id: 0,
      name: namee[namee.length-1],
      Description: '',
      Code: '',
      CandidateID: 0
      }
    }
    skillsfactory(namee:string[])
    {
      return{
        id:0,
    name:namee[namee.length-1],
    Description: '',
    Level: 0,
    CandidateID: 0
      }
    }
    positionbind(ele:any)
   {
     this.mycand.position=ele.target.value
     this.flagy()

   }
   expbind(ele:any)
   {
     this.mycand.workExperience= parseInt(ele.target.value)
     this.flagy()
   }
   wstatbind(ele:any)
   {
    console.log(ele)
     this.mycand.jobType=ele
     this.flagy()
   }
   datebind(ele:any)
   {
     this.mycand.availabilityDate=ele
     this.flagy()
     console.log(ele)
   }
   salbind(ele:any)
   {
    console.log(parseInt( ele.target.value))
     this.mycand.expectedSalary=parseFloat( ele.target.value)
     this.flagy()


   }
   currbind(ele:any)
   {

   }
   dayoffbind(ele:any)
   {
    this.mycand.preferredDay=ele
    this.flagy()

   }
   acobind(ele:any)
   {
    this.mycand.accommodationPref=ele
    this.flagy()

   }
   addlangbind(ele:any)
   {
    //console.log(ele)

  if(ele.length>this.flag1)
    {
      if(this.mycand.languages[0].name.length==0)
        {
          this.mycand.languages[0].name=ele[0]
          this.flag1++

          this.flagy()
        }
        else{
          this.mycand.languages.push(this.languagefactory(ele))
          this.flag1++
        }
    }
    else{
      this.mycand.languages = this.mycand.languages.filter(lang => ele.includes(lang.name));

         this.flag1--
    }
console.log(this.candservice.mycandidate)
   }

   addmainbind(ele:any)
   {
    //console.log(ele)
  if(ele.length>this.flag2)
    {
      if(this.mycand.mainSkills[0].name.length==0)
        {
          this.mycand.mainSkills[0].name=ele[0]
          this.flag2++
          this.flagy()
        }
        else{
          this.mycand.mainSkills.push(this.skillsfactory(ele))
          this.flag2++
        }
    }
    else{
      this.mycand.mainSkills = this.mycand.mainSkills.filter(main => ele.includes(main.name));

         this.flag2--
    }

  console.log(this.mycand.mainSkills)
   }

   addcookbind(ele:any)
   {
    //console.log(ele)
  if(ele.length>this.flag3)
    {
      if(this.mycand.cookingSkills[0].name.length==0)
        {
          this.mycand.cookingSkills[0].name=ele[0]
          this.flag3++
          this.flagy()
        }
        else{
          this.mycand.cookingSkills.push(this.skillsfactory(ele))
          this.flag3++
        }
    }
    else{
      this.mycand.cookingSkills = this.mycand.cookingSkills.filter(cook => ele.includes(cook.name));

         this.flag3--
    }

  console.log(this.mycand.cookingSkills)
   }

   addotherbind(ele:any)
   {
    //console.log(ele)
  if(ele.length>this.flag4)
    {
      if(this.mycand.otherSkills[0].name.length==0)
        {
          this.mycand.otherSkills[0].name=ele[0]
          this.flag4++
          this.flagy()
        }
        else{
          this.mycand.otherSkills.push(this.skillsfactory(ele))
          this.flag4++
        }
    }
    else{
      this.mycand.otherSkills = this.mycand.otherSkills.filter(other => ele.includes(other.name));

         this.flag4--
    }

  console.log(this.mycand)
   }
   handlebinding()
   {
    if(this.mycand.languages[0].name.length!=0 )
      {
        this.candservice.mycandidate.languages?.forEach(language =>
          {
               this.mylangs.push(language.name);
          }
       )
      }
      if(this.mycand.mainSkills[0].name.length!=0 )
        {
          this.candservice.mycandidate.mainSkills?.forEach(main =>
            {
                 this.mymainskills.push(main.name);
            }
         )
        }
        if(this.mycand.otherSkills[0].name.length!=0 )
          {
            this.candservice.mycandidate.otherSkills?.forEach(other =>
              {
                   this.myotherskills.push(other.name);
              }
           )
          }
          if(this.mycand.cookingSkills[0].name.length!=0 )
            {
              this.candservice.mycandidate.cookingSkills?.forEach(cook =>
                {
                     this.mycookingskills.push(cook.name);
                }
             )
            }

   }

   flagy() {
    // //Specify the fields you want to check for emptiness in the main object
    // const fieldsToCheck: (keyof ICandidates)[] = ['position', 'workExperience', 'jobType', 'availabilityDate', 'expectedSalary', 'preferredDay', 'accommodationPref'];

    // // Check if any of the specified fields in the main object are empty
    // this.myflag = fieldsToCheck.some(field => !this.mycand[field]);


    // // Check properties in nested arrays
    // if (!this.myflag) {
    //   const nestedArraysToCheck: (keyof ICandidates)[] = ['languages', 'mainSkills', 'cookingSkills', 'otherSkills'];
    //   for (const arrayKey of nestedArraysToCheck) {
    //     // Narrow down the type of array using a type guard
    //     if (Array.isArray(this.mycand[arrayKey])) {
    //       const array = this.mycand[arrayKey] as Array<{ name: string }>; // Assuming 'Name' is the property you want to check
    //       for (const item of array) {
    //         if (!item.name) {
    //           this.myflag = true;
    //           return; // Exit early if any empty property is found
    //         }
    //       }
    //     }
    //   }
    // }
    // console.log(this.myflag)
  }




}
