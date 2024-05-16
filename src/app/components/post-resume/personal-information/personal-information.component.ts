import { Component, OnInit, ViewChild } from '@angular/core';
import {
  NgMultiSelectDropDownModule,
} from 'ng-multiselect-dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { CommonModule } from '@angular/common';
import { PersonalInformationDataProviderService } from '../Post-Resume-Spares/Data-Provider/Personal-Information-Data-Provider/personal-information-data-provider.service';
import { MultipleSearchSelectComponent } from '../Post-Resume-Spares/Inputs/multiple-search-select/multiple-search-select.component';
import { OptionsOfJobsAndCandidate } from '../../OptionsOfJobsAndCandidates/options-of-jobs-and-candidate';
import { ICandidates } from '../../../models/icandidates';
import { FcandidateService } from '../../../services/fcandidate.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-personal-information',
  standalone: true,
  imports: [NgMultiSelectDropDownModule, MdbFormsModule,CommonModule,MultipleSearchSelectComponent, FormsModule, RouterLink,RouterOutlet],
  templateUrl: './personal-information.component.html',
  styleUrls: ['../general-style.css','./personal-information.component.css'],
})
export class PersonalInformationComponent implements OnInit  {
  Date:PersonalInformationDataProviderService=new PersonalInformationDataProviderService();
 mycand!:ICandidates
 disabledflag:number=0;
 myflag:boolean=false;


 constructor(private candservice:FcandidateService)
 {
   this.mycand=candservice.mycandidate
   this.candservice.frmdata=new FormData()
   console.log(this.candservice.frmdata)


 }
  ngOnInit(): void {
    this.flagy();
  }
 filebind(ele:any)
{
  const file = ele.currentTarget.files[ele.currentTarget.files.length - 1];
  if (file) { // Check if file exists

   this.candservice.frmdata.append('file',file,file.name)
    this.candservice.canfile.file = file;
    this.flagy();
  }
}
fnamebind(ele:any)
{
  this.mycand.fname=ele.target.value
  this.flagy();
console.log(this.mycand)
}
lnamebind(ele:any)
{
  this.mycand.lname=ele.target.value
  this.flagy();

}
agebind(ele:any)
{
  this.mycand.age=parseInt( ele.target.value)
  this.flagy();

}
genderbind(ele:any)
{
  this.mycand.gender=ele.target.value
  this.flagy();

}
maritalbind(ele:any)
{
  this.mycand.martialStatus=ele.target.value
  this.flagy();

}
kidsbind(ele:any)
{
  this.mycand.noKids=ele.target.value
  this.flagy();

}
nationalitybind(ele:any)
{
  this.mycand.nationality=ele.target.value
  this.flagy();

}
Religionbind(ele:any)
{
  this.mycand.religion=ele.target.value
  this.flagy();

}
Educationbind(ele:any)
{
  this.mycand.educationLevel=ele.target.value
  this.flagy();

}
livebind(ele:any)
{
  this.mycand.location=ele.target.value
  this.flagy();
}
emailbind(ele:any)
{
  this.mycand.contactEmail=ele.target.value
  this.flagy();

}
phonebind(ele:any)
{
  this.mycand.phoneNumber=ele.target.value
  this.flagy();

}
watsbind(ele:any)
{
  this.mycand.whatappNumber=ele.target.value
  this.flagy();

}
passbind(ele:any)
{
  this.mycand.hasPassport=ele.target.checked

}
flagy() {

  // const fieldsToCheck: (keyof ICandidates)[] = [ 'fname', 'lname', 'age', 'gender', 'martialStatus', 'nationality', 'religion', 'educationLevel', 'location', 'contactEmail', 'phoneNumber', 'whatappNumber'];
  // this.myflag = fieldsToCheck.some(field => !this.mycand[field]);
  // console.log(this.myflag);
}

}


