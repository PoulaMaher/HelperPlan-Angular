import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IFiltercandidate } from '../models/ifiltercandidate';
import { Observable } from 'rxjs';
import { ICandidate } from '../models/ICandidate';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICandidates } from '../models/icandidates';
import { ICookingSkills } from '../models/ICookingSkills';
import { IOtherSkills } from '../models/IOtherSkills';
import { ILanguages } from '../models/ILanguages';
import { IMainSkills } from '../models/IMainSkills';
import { IEducation } from '../models/IEducation';
import { IExperience } from '../models/IExperience';
import { ICandAndFile } from '../models/i-cand-and-file';
import { environment } from '../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FcandidateService {
  private apiUrl = `${environment.baseUrl}/Cadidate/GetFilteredCandidates`;
  private postapiUrl = `${environment.baseUrl}/Candidate/Insert`;
  private countApi =`${environment.baseUrl}/Candidate/Count`
  private getbyidAPIURL =`${environment.baseUrl}/Candidate/GetById/`
  private deleteAPIURL =`${environment.baseUrl}/Candidate/Delete/`
  private updateAPIURL =`${environment.baseUrl}/Cadidate/Update`
  testingfilter:IFiltercandidate
  mycandidate!:ICandidates///--------------->

  myform!:FormGroup
  canfile!:ICandAndFile
  frmdata:FormData=new FormData();
  constructor(private http:HttpClient,private fb:FormBuilder) {

        this.testingfilter={
      Position: '',
  Jobtype: '',
  StartDate:new Date(2000, 0, 1),
  Contract:[],
  Workexperience: 0, Language:[],Mainskills:[],
  Gender: '',Age: 0,Ischange: false,pageIndex:0,pageSize:10,pageCount:0,
    }
    /////////initialize candidate/////--------------->
    this.mycandidate= {
      id: 0,
      phoneNumber: '',
      phoneNumberConfirmed: false,
      fname: '',
      lname: '',
      location: '',
      description: '',
      position: '',
      contactEmail: '',
      photoURL: '',
      age: 0,
      gender: '',
      noKids: 0,
      workExperience: 0,
      martialStatus: '',
      nationality: '',
      religion: '',
      educationLevel: '',
      whatappNumber: '',
      hasPassport: false,
      jobType: '',
      workStatus: '',
      availabilityDate: new Date(),
      expectedSalary: 0,
      preferredDay: '',
      accommodationPref: '',
      experiences: [{
        id: 0,
        jobPosition: '',
        workingCountry: '',
        startYear: new Date(),
        endYear: new Date(),
        employerType: '',
        duties: '',
        hasLetterRef: false,
        candidateID: 0,
        //Candidate:undefined
      }],
      educations: [{
        id: 0,
        educationLevel: '',
        crsDuration: '',
        hasComplete: false,
        completionYear: new Date(),
        candidateID: 0,
        //Candidate: undefined
      }],
      mainSkills: [{
        id: 0,
        name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
        //Candidate: undefined
      }],
      languages: [{
        id: 0,
        name: '',
        Description: '',
        Code: '',
        CandidateID: 0,
       // Candidate: undefined

      }],
      otherSkills: [{
        id: 0,
        name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
       // Candidate: undefined
      }],
      cookingSkills: [{
        id: 0,
        name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
       // Candidate: undefined
      }]
    };
    this.canfile = {
      cands:this.mycandidate /* initialize cand property */,
      file: null // Initialize file property as null
    };
    ////form builder----------->

       //this.myform=this.createCandidateForm(this.mycandidate)

  ///end of form group---------->

   }
   setfiltered(tf:IFiltercandidate){
    this.testingfilter=tf
  }
  ///get count
  getcount():Observable<number>{
    return this.http.get<number>(this.countApi);
  }
  ////get candidateDto
  getCandidates(filter: IFiltercandidate): Observable<ICandidate[]> {



    let params = new HttpParams();
    params = params.append('Position', filter.Position);
  // params = params.append('StartDate', `${filter.StartDate}`);
    params = params.append('Jobtype', filter.Jobtype);
    params = params.append('Workexperience', filter.Workexperience);
    params = params.append('Age', filter.Age);
   params = params.append('Jobtype', filter.Jobtype);
   params = params.append('pageIndex', filter.pageIndex);
   params = params.append('pageSize', filter.pageSize);

   params = params.append('startDate', this.formatDateTime(filter.StartDate));
   if (filter.Contract) {
    filter.Contract.forEach(contract => {
      params = params.append('Contract', contract);
    });

    if (filter.Language) {
      filter.Language.forEach(language => {
        params = params.append('Language', language);
      });
    }
    if (filter.Mainskills) {
      filter.Mainskills.forEach(skill => {
        params = params.append('Mainskills', skill);
      });
    }
    params = params.append('Gender', filter.Gender);


  }
  return this.http.get<ICandidate[]>(this.apiUrl, { params:params });
  }
  ////////get by id
  getCandidateById(id: number): Observable<ICandidates> {
    return this.http.get<ICandidates>(`${this.getbyidAPIURL}${id}`);
  }
  /////////delete
  deleteCandidate(id: number): Observable<any> {
    return this.http.delete(`${this.deleteAPIURL}${id}`);
  }
  //////////////getall
  getAllCandidates(): Observable<ICandidates[]> {
    return this.http.get<ICandidates[]>(`${environment.baseUrl}/Candidate/GetAll`);
  }
  /////////////update
  updateCandidate(candidate: FormData): Observable<FormData>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.put<FormData>(this.updateAPIURL,candidate);
  }

  ///////////////////--post candidate---------------------->
  // postCandidate(candidate: ICandidates): Observable<ICandidates>
  // {
  //   return this.http.post<ICandidates>(this.postapiUrl,candidate);
  // }
  postCandidate(candidate: FormData): Observable<FormData>
  {
    const headers = new HttpHeaders({
      'Content-Type': 'multipart/form-data'
    });
    return this.http.post<FormData>(this.postapiUrl,candidate);
  }



 formatDateTime(date: Date): string {
  const year = date.getFullYear()
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');
  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
 resetCandidate()
 {
  var mycandidate:ICandidates
 return mycandidate= {
    id: 0,
    phoneNumber: '',
    phoneNumberConfirmed: false,
    fname: '',
    lname: '',
    location: '',
    description: '',
    position: '',
    contactEmail: '',
    photoURL: '',
    age: 0,
    gender: '',
    noKids: 0,
    workExperience: 0,
    martialStatus: '',
    nationality: '',
    religion: '',
    educationLevel: '',
    whatappNumber: '',
    hasPassport: false,
    jobType: '',
    workStatus: '',
    availabilityDate: new Date(),
    expectedSalary: 0,
    preferredDay: '',
    accommodationPref: '',
    experiences: [{
      id: 0,
      jobPosition: '',
      workingCountry: '',
      startYear: new Date(),
      endYear: new Date(),
      employerType: '',
      duties: '',
      hasLetterRef: false,
      candidateID: 0,
      //Candidate:undefined
    }],
    educations: [{
      id: 0,
      educationLevel: '',
      crsDuration: '',
      hasComplete: false,
      completionYear: new Date(),
      candidateID: 0,
      //Candidate: undefined
    }],
    mainSkills: [{
      id: 0,
      name: '',
      Description: '',
      Level: 0,
      CandidateID: 0,
      //Candidate: undefined
    }],
    languages: [{
      id: 0,
      name: '',
      Description: '',
      Code: '',
      CandidateID: 0,
     // Candidate: undefined

    }],
    otherSkills: [{
      id: 0,
      name: '',
      Description: '',
      Level: 0,
      CandidateID: 0,
     // Candidate: undefined
    }],
    cookingSkills: [{
      id: 0,
      name: '',
      Description: '',
      Level: 0,
      CandidateID: 0,
     // Candidate: undefined
    }]
  };

 }
 /////////////////////----------------------->
//   createCandidateForm(candidate: ICandidates): FormGroup {
//     return this.fb.group({
//       id: new FormControl(candidate.id),
//       phoneNumber: new FormControl(candidate.phoneNumber, Validators.required),
//       phoneNumberConfirmed: new FormControl(candidate.phoneNumberConfirmed),
//       fname: new FormControl(candidate.fname, Validators.required),
//       lname: new FormControl(candidate.lname, Validators.required),
//       location: new FormControl(candidate.location, Validators.required),
//       description: new FormControl(candidate.description),
//       position: new FormControl(candidate.position),
//       contactEmail: new FormControl(candidate.contactEmail, Validators.email),
//       photoURL: new FormControl(candidate.photoURL),
//       age: new FormControl(candidate.age, Validators.min(0)),
//       gender: new FormControl(candidate.gender),
//       noKids: new FormControl(candidate.noKids),
//       workexperience: new FormControl(candidate.workExperience),
//       martialStatus: new FormControl(candidate.martialStatus),
//       nationality: new FormControl(candidate.nationality),
//       religion: new FormControl(candidate.religion),
//       educationLevel: new FormControl(candidate.educationLevel),
//       whatappNumber: new FormControl(candidate.whatappNumber),
//       hasPassport: new FormControl(candidate.hasPassport),
//       jobType: new FormControl(candidate.jobType),
//       workStatus: new FormControl(candidate.workStatus),
//       availabilityDate: new FormControl(candidate.availabilityDate),
//       exepectedSalary: new FormControl(candidate.expectedSalary),
//       perferedDay: new FormControl(candidate.preferredDay),
//       accomodationPref: new FormControl(candidate.accommodationPref),
//       experiences: this.createExperienceFormArray(candidate.experiences),
//       educations: this.createEducationFormArray(candidate.educations),
//       mainSkills: this.createMainSkillsFormArray(candidate.mainSkills),
//       languages: this.createLanguagesFormArray(candidate.languages),
//       otherSkills: this.createOtherSkillsFormArray(candidate.otherSkills),
//       cookingSkills: this.createCookingSkillsFormArray(candidate.cookingSkills)
//     });
//   }
// // Create FormArray for experiences
// private createExperienceFormArray(experiences: IExperience[]): FormArray {
//   return this.fb.array(
//     experiences.map(experience => this.fb.group({
//       ID: new FormControl(experience.id),
//       JobPosition: new FormControl(experience.jobPosition),
//       WorkingCountry: new FormControl(experience.workingCountry),
//       StartYear: new FormControl(experience.startYear),
//       EndYear: new FormControl(experience.endYear),
//       EmployerType: new FormControl(experience.employerType),
//       Duties: new FormControl(experience.duties),
//       HasLetterRef: new FormControl(experience.hasLetterRef),
//       CandidateID: new FormControl(experience.candidateID)
//     }))
//   );
// }

// // Create FormArray for educations
// private createEducationFormArray(educations: IEducation[]): FormArray {
//   return this.fb.array(
//     educations.map(education => this.fb.group({
//       ID: new FormControl(education.id),
//       EducationLevel: new FormControl(education.educationLevel),
//       CrsDuration: new FormControl(education.crsDuration),
//       HasComplete: new FormControl(education.hasComplete),
//       CompletionYear: new FormControl(education.completionYear),
//       CandidateID: new FormControl(education.candidateID)
//     }))
//   );
// }

// // Create FormArray for mainSkills
// private createMainSkillsFormArray(mainSkills: IMainSkills[]): FormArray {
//   return this.fb.array(
//     mainSkills.map(skill => this.fb.group({
//       ID: new FormControl(skill.ID),
//       Name: new FormControl(skill.name),
//       Description: new FormControl(skill.Description),
//       Level: new FormControl(skill.Level),
//       CandidateID: new FormControl(skill.CandidateID)
//     }))
//   );
// }

// // Create FormArray for languages
// private createLanguagesFormArray(languages: ILanguages[]): FormArray {
//   return this.fb.array(
//     languages.map(language => this.fb.group({
//       ID: new FormControl(language.ID),
//       Name: new FormControl(language.name),
//       Description: new FormControl(language.Description),
//       Code: new FormControl(language.Code),
//       CandidateID: new FormControl(language.CandidateID)
//     }))
//   );
// }

// // Create FormArray for otherSkills
// private createOtherSkillsFormArray(otherSkills: IOtherSkills[]): FormArray {
//   return this.fb.array(
//     otherSkills.map(skill => this.fb.group({
//       ID: new FormControl(skill.ID),
//       Name: new FormControl(skill.name),
//       Description: new FormControl(skill.Description),
//       Level: new FormControl(skill.Level),
//       CandidateID: new FormControl(skill.CandidateID)
//     }))
//   );
// }

// // Create FormArray for cookingSkills
// private createCookingSkillsFormArray(cookingSkills: ICookingSkills[]): FormArray {
//   return this.fb.array(
//     cookingSkills.map(skill => this.fb.group({
//       ID: new FormControl(skill.ID),
//       Name: new FormControl(skill.name),
//       Description: new FormControl(skill.Description),
//       Level: new FormControl(skill.Level),
//       CandidateID: new FormControl(skill.CandidateID)
//     }))
//   );
// }

}
