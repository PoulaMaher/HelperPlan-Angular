import { HttpClient, HttpParams } from '@angular/common/http';
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
@Injectable({
  providedIn: 'root'
})
export class FcandidateService {
  private apiUrl = 'https://localhost:44376/Cadidate/GetFilteredCandidates';
  private postapiUrl = 'https://localhost:44376/Candidate/Insert';
  testingfilter:IFiltercandidate
  mycandidate!:ICandidates///--------------->

  myform!:FormGroup

  constructor(private http:HttpClient,private fb:FormBuilder) {
    this.testingfilter={
      Position: '',
  Jobtype: '',
  StartDate:new Date(),
  Contract:[],
  Workexperience: 0, Language:[],Mainskills:[],
  Gender: '',Age: 0,Ischange: false,
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
      workexperience: 0,
      martialStatus: '',
      nationality: '',
      religion: '',
      educationLevel: '',
      whatappNumber: '',
      hasPassport: false,
      jobType: '',
      workStatus: '',
      availabilityDate: new Date(),
      exepectedSalary: 0,
      preferredDay: '',
      accommodationPref: '',
      experiences: [{
        ID: 0,
        JobPosition: '',
        WorkingCountry: '',
        StartYear: new Date(),
        EndYear: new Date(),
        EmployerType: '',
        Duties: '',
        HasLetterRef: false,
        CandidateID: 0,
        //Candidate:undefined
      }],
      educations: [{
        ID: 0,
        EducationLevel: '',
        CrsDuration: '',
        HasComplete: false,
        CompletionYear: new Date(),
        CandidateID: 0,
        //Candidate: undefined
      }],
      mainSkills: [{
        ID: 0,
        Name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
        //Candidate: undefined
      }],
      languages: [{
        ID: 0,
        Name: '',
        Description: '',
        Code: '',
        CandidateID: 0,
       // Candidate: undefined

      }],
      otherSkills: [{
        ID: 0,
        Name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
       // Candidate: undefined
      }],
      cookingSkills: [{
        ID: 0,
        Name: '',
        Description: '',
        Level: 0,
        CandidateID: 0,
       // Candidate: undefined
      }]
    };
    ////form builder----------->

       this.myform=this.createCandidateForm(this.mycandidate)

  ///end of form group---------->

   }
   setfiltered(tf:IFiltercandidate){
    this.testingfilter=tf
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
    // const params = {
    //   Position: filter.Position,
    //   StartDate: filter.StartDate,
    //   Workexperience: filter.Workexperience,
    //   Age: filter.Age,
    //   Jobtype: filter.Jobtype,
    //   Contract: filter.Contract,
    //   Language: filter.Language,
    //   Mainskills: filter.Mainskills,
    //   Gender: filter.Gender
    // };

  }
  return this.http.get<ICandidate[]>(this.apiUrl, { params:params });
  }
  ///////////////////--post candidate---------------------->
  postCandidate(candidate: ICandidates): Observable<ICandidates>
  {
    return this.http.post<ICandidates>(this.postapiUrl,candidate);
  }

  /////////////////////----------------------->
  createCandidateForm(candidate: ICandidates): FormGroup {
    return this.fb.group({
      id: new FormControl(candidate.id),
      phoneNumber: new FormControl(candidate.phoneNumber, Validators.required),
      phoneNumberConfirmed: new FormControl(candidate.phoneNumberConfirmed),
      fname: new FormControl(candidate.fname, Validators.required),
      lname: new FormControl(candidate.lname, Validators.required),
      location: new FormControl(candidate.location, Validators.required),
      description: new FormControl(candidate.description),
      position: new FormControl(candidate.position),
      contactEmail: new FormControl(candidate.contactEmail, Validators.email),
      photoURL: new FormControl(candidate.photoURL),
      age: new FormControl(candidate.age, Validators.min(0)),
      gender: new FormControl(candidate.gender),
      noKids: new FormControl(candidate.noKids),
      workexperience: new FormControl(candidate.workexperience),
      martialStatus: new FormControl(candidate.martialStatus),
      nationality: new FormControl(candidate.nationality),
      religion: new FormControl(candidate.religion),
      educationLevel: new FormControl(candidate.educationLevel),
      whatappNumber: new FormControl(candidate.whatappNumber),
      hasPassport: new FormControl(candidate.hasPassport),
      jobType: new FormControl(candidate.jobType),
      workStatus: new FormControl(candidate.workStatus),
      availabilityDate: new FormControl(candidate.availabilityDate),
      exepectedSalary: new FormControl(candidate.exepectedSalary),
      perferedDay: new FormControl(candidate.preferredDay),
      accomodationPref: new FormControl(candidate.accommodationPref),
      experiences: this.createExperienceFormArray(candidate.experiences),
      educations: this.createEducationFormArray(candidate.educations),
      mainSkills: this.createMainSkillsFormArray(candidate.mainSkills),
      languages: this.createLanguagesFormArray(candidate.languages),
      otherSkills: this.createOtherSkillsFormArray(candidate.otherSkills),
      cookingSkills: this.createCookingSkillsFormArray(candidate.cookingSkills)
    });
  }
// Create FormArray for experiences
private createExperienceFormArray(experiences: IExperience[]): FormArray {
  return this.fb.array(
    experiences.map(experience => this.fb.group({
      ID: new FormControl(experience.ID),
      JobPosition: new FormControl(experience.JobPosition),
      WorkingCountry: new FormControl(experience.WorkingCountry),
      StartYear: new FormControl(experience.StartYear),
      EndYear: new FormControl(experience.EndYear),
      EmployerType: new FormControl(experience.EmployerType),
      Duties: new FormControl(experience.Duties),
      HasLetterRef: new FormControl(experience.HasLetterRef),
      CandidateID: new FormControl(experience.CandidateID)
    }))
  );
}

// Create FormArray for educations
private createEducationFormArray(educations: IEducation[]): FormArray {
  return this.fb.array(
    educations.map(education => this.fb.group({
      ID: new FormControl(education.ID),
      EducationLevel: new FormControl(education.EducationLevel),
      CrsDuration: new FormControl(education.CrsDuration),
      HasComplete: new FormControl(education.HasComplete),
      CompletionYear: new FormControl(education.CompletionYear),
      CandidateID: new FormControl(education.CandidateID)
    }))
  );
}

// Create FormArray for mainSkills
private createMainSkillsFormArray(mainSkills: IMainSkills[]): FormArray {
  return this.fb.array(
    mainSkills.map(skill => this.fb.group({
      ID: new FormControl(skill.ID),
      Name: new FormControl(skill.Name),
      Description: new FormControl(skill.Description),
      Level: new FormControl(skill.Level),
      CandidateID: new FormControl(skill.CandidateID)
    }))
  );
}

// Create FormArray for languages
private createLanguagesFormArray(languages: ILanguages[]): FormArray {
  return this.fb.array(
    languages.map(language => this.fb.group({
      ID: new FormControl(language.ID),
      Name: new FormControl(language.Name),
      Description: new FormControl(language.Description),
      Code: new FormControl(language.Code),
      CandidateID: new FormControl(language.CandidateID)
    }))
  );
}

// Create FormArray for otherSkills
private createOtherSkillsFormArray(otherSkills: IOtherSkills[]): FormArray {
  return this.fb.array(
    otherSkills.map(skill => this.fb.group({
      ID: new FormControl(skill.ID),
      Name: new FormControl(skill.Name),
      Description: new FormControl(skill.Description),
      Level: new FormControl(skill.Level),
      CandidateID: new FormControl(skill.CandidateID)
    }))
  );
}

// Create FormArray for cookingSkills
private createCookingSkillsFormArray(cookingSkills: ICookingSkills[]): FormArray {
  return this.fb.array(
    cookingSkills.map(skill => this.fb.group({
      ID: new FormControl(skill.ID),
      Name: new FormControl(skill.Name),
      Description: new FormControl(skill.Description),
      Level: new FormControl(skill.Level),
      CandidateID: new FormControl(skill.CandidateID)
    }))
  );
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


}
