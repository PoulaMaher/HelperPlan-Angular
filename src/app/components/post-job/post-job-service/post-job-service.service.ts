import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { JobRequirmentsClass } from '../job-requirment/JobRequirmentsClass/job-requirments-class';
import {
  AboutYouClass,
  Else,
  Family,
  Fix,
  Range,
} from '../about-you/AboutYouClass/about-you-class';
import { JobDetailsClass } from '../job-details/JobDetailsClass/job-details-class';

@Injectable({
  providedIn: 'root',
})
export class PostJobService {
  JobRequirmentsForm = new FormGroup({
    PositionOffered: new FormControl('', Validators.required),
    Type: new FormControl('', Validators.required),
    Location: new FormControl('', Validators.required),
    StartDate: new FormControl(new Date(), Validators.required),
    LanguageSkills: new FormControl([], Validators.required),
    MainSkills: new FormControl([], Validators.required),
    CookingSkills: new FormControl([], Validators.required),
    OtherSkills: new FormControl([], Validators.required),
    MostImportantSkills: new FormControl([], Validators.required),
    PreferedCandidateLocation: new FormControl('', Validators.required),
    PreferedCandidateContract: new FormControl('', Validators.required),
    Gender: new FormControl('', Validators.required),
    Nationality: new FormControl([], Validators.required),
    Education: new FormControl('', Validators.required),
    Religion: new FormControl([], Validators.required),
    MinimumAge: new FormControl(18, Validators.required),
    MaximumAge: new FormControl(25, Validators.required),
    MinimumExperience: new FormControl(0, Validators.required),
    MaximumExperience: new FormControl(5, Validators.required),
  });
  ReturnJobRequirmentObject(): JobRequirmentsClass {
    const JobRequirmentObject = new JobRequirmentsClass();
    JobRequirmentObject.BasicInformation.Location =
      this.JobRequirmentsForm.get('Location')?.value!;
    JobRequirmentObject.BasicInformation.PositionOffered =
      this.JobRequirmentsForm.get('PositionOffered')?.value!;
    JobRequirmentObject.BasicInformation.StartDate =
      this.JobRequirmentsForm.get('StartDate')?.value!;
    JobRequirmentObject.BasicInformation.Type =
      this.JobRequirmentsForm.get('Type')?.value!;
    JobRequirmentObject.RequiredSkillsAndDuties.CookingSkills =
      this.JobRequirmentsForm.get('CookingSkills')?.value!;
    JobRequirmentObject.RequiredSkillsAndDuties.MainSkills =
      this.JobRequirmentsForm.get('MainSkills')?.value!;
    JobRequirmentObject.RequiredSkillsAndDuties.LanguageSkills =
      this.JobRequirmentsForm.get('LanguageSkills')?.value!;
    JobRequirmentObject.RequiredSkillsAndDuties.OtherSkills =
      this.JobRequirmentsForm.get('OtherSkills')?.value!;
    JobRequirmentObject.RequiredSkillsAndDuties.MostImportantSkills =
      this.JobRequirmentsForm.get('MostImportantSkills')?.value!;
    JobRequirmentObject.CandidatePreference.PreferedCandidateLocation =
      this.JobRequirmentsForm.get('PreferedCandidateLocation')?.value!;
    JobRequirmentObject.CandidatePreference.PreferedCandidateContract =
      this.JobRequirmentsForm.get('PreferedCandidateContract')?.value!;
    JobRequirmentObject.CandidatePreference.Gender =
      this.JobRequirmentsForm.get('Gender')?.value!;
    JobRequirmentObject.CandidatePreference.Nationality =
      this.JobRequirmentsForm.get('Nationality')?.value!;
    JobRequirmentObject.CandidatePreference.Education =
      this.JobRequirmentsForm.get('Education')?.value!;
    JobRequirmentObject.CandidatePreference.Religion =
      this.JobRequirmentsForm.get('Religion')?.value!;
    JobRequirmentObject.CandidatePreference.AgeRequired[0] =
      this.JobRequirmentsForm.get('MinimumAge')?.value!;
    JobRequirmentObject.CandidatePreference.AgeRequired[1] =
      this.JobRequirmentsForm.get('MaximumAge')?.value!;
    JobRequirmentObject.CandidatePreference.ExperienceYearsRequired[0] =
      this.JobRequirmentsForm.get('MinimumExperience')?.value!;
    JobRequirmentObject.CandidatePreference.ExperienceYearsRequired[1] =
      this.JobRequirmentsForm.get('MaximumExperience')?.value!;
    console.log(JobRequirmentObject);
    return JobRequirmentObject;
  }
  AboutYouForm = new FormGroup({
    EmployerType: new FormControl('', Validators.required),
    Family: new FormGroup({
      FamilyType: new FormControl(''),
      HavePets: new FormControl(false),
      Nationality: new FormControl(''),
    }),
    ReceiveByEmail: new FormControl(false),
    Email: new FormControl('', [Validators.required, Validators.email]),
    DayOFF: new FormControl('', Validators.required),
    Accomodation: new FormControl('', Validators.required),
    MonthlySalaryOffer: new FormControl('', Validators.required),
    Fix: new FormGroup({
      MonthlySalary: new FormControl(0),
      Currency: new FormControl(''),
    }),
    Range: new FormGroup({
      MaxSalary: new FormControl(0),
      MinSalary: new FormControl(0),
      Currency: new FormControl(''),
    }),
    Else: new FormGroup({
      Description: new FormControl(''),
    }),
  });
  ReturnAboutYouObject(): import('../about-you/AboutYouClass/about-you-class').AboutYouClass {
    const AboutYouObject = new AboutYouClass();
    AboutYouObject.AboutYou.Email = this.AboutYouForm.get('Email')?.value!;
    AboutYouObject.AboutYou.ReceiveByEmail =
      this.AboutYouForm.get('ReceiveByEmail')?.value!;
    if (this.AboutYouForm.get('EmployerType')!.value == 'Family') {
      AboutYouObject.AboutYou.EmployerType = this.returnfamilyobject();
    } else {
      AboutYouObject.AboutYou.EmployerType.Type =
        this.AboutYouForm.get('EmployerType')?.value!;
    }
    AboutYouObject.OffersToCandidate.Accomodation =
      this.AboutYouForm.get('Accomodation')?.value!;
    AboutYouObject.OffersToCandidate.DayOFF =
      this.AboutYouForm.get('DayOFF')?.value!;
    if (this.AboutYouForm.get('MonthlySalaryOffer')!.value == 'Dont-Mention') {
      AboutYouObject.OffersToCandidate.MonthlySalaryOffer.Title =
        this.AboutYouForm.get('MonthlySalaryOffer')?.value!;
    } else {
      AboutYouObject.OffersToCandidate.MonthlySalaryOffer =
        this.returnsalaryobject()!;
    }
    console.log(AboutYouObject);
    return AboutYouObject;
  }
  returnsalaryobject() {
    switch (this.AboutYouForm.get('MonthlySalaryOffer')?.value) {
      case 'Fix':
        let fix = new Fix();
        fix.Title = 'Fix';
        fix.MonthlySalary = Number(
          this.AboutYouForm.get('Fix.MonthlySalary')?.value!
        );
        fix.Currency = this.AboutYouForm.get('Fix.Currency')?.value!;
        return fix;
      case 'Range':
        let range = new Range();
        range.Title = 'Range';
        range.MaxSalary = Number(
          this.AboutYouForm.get('Range.MaxSalary')?.value!
        );
        range.MinSalary = Number(
          this.AboutYouForm.get('Range.MinSalary')?.value!
        );
        range.Currency = this.AboutYouForm.get('Range.Currency')?.value!;
        return range;
      case 'Else':
        let elsee = new Else();
        elsee.Title = 'Else';
        elsee.Description = this.AboutYouForm.get('Else.Description')?.value!;
        return elsee;
      default:
        return null;
    }
  }
  returnfamilyobject(): import('../about-you/AboutYouClass/about-you-class').Family {
    let family = new Family();
    family.Type = this.AboutYouForm.get('EmployerType')?.value!;
    family.FamilyType = this.AboutYouForm.get('Family.FamilyType')?.value!;
    family.HavePets = this.AboutYouForm.get('Family.HavePets')?.value!;
    family.Nationality = this.AboutYouForm.get('Family.Nationality')?.value!;
    return family;
  }
  JobDetailsForm = new FormGroup({
    ImgUrl: new FormControl(''),
    JobTitle: new FormControl('', [
      Validators.required,
      Validators.minLength(15),
    ]),
    JobDescription: new FormControl('', [
      Validators.required,
      Validators.minLength(25),
    ]),
    ReceivePrivilegedAndDiscountOffers: new FormControl(false),
    SubscribeToOurTipsAndNewsletters: new FormControl(false),
  });
  ReturnJobDetailsObject(): JobDetailsClass {
    const jobdetails = new JobDetailsClass();
    jobdetails.ImgUrl = this.JobDetailsForm.get('ImgUrl')?.value!;
    jobdetails.JobTitle = this.JobDetailsForm.get('JobTitle')?.value!;
    jobdetails.JobDescription =
      this.JobDetailsForm.get('JobDescription')?.value!;
    jobdetails.ReceivePrivilegedAndDiscountOffers = this.JobDetailsForm.get(
      'ReceivePrivilegedAndDiscountOffers'
    )?.value!;
    jobdetails.SubscribeToOurTipsAndNewsletters = this.JobDetailsForm.get(
      'SubscribeToOurTipsAndNewsletters'
    )?.value!;
    console.log(jobdetails);
    return jobdetails;
  }

  constructor() {}
}
