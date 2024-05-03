import { Injectable } from '@angular/core';
import { OptionsOfJobsAndCandidate } from '../../../OptionsOfJobsAndCandidates/options-of-jobs-and-candidate';
@Injectable({
  providedIn: 'root',
})
export class JobRequirmentsService {
  constructor() {
    let response = fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        // Extracting official names of countries
        const officialNames = data.map(
          (country: { name: { common: any } }) => country.name.common
        );
        this.Countries = officialNames;
      })
      .catch((error) => console.error('Error fetching data:', error));
  }
  Countries: string[] = [];
  StatesOfCountries: string[] = [];
  LanguageSkills:string[]=OptionsOfJobsAndCandidate.LanguageStatus
  MainSkills:string[]=OptionsOfJobsAndCandidate.MainSkillsStatus
  CookingSkills:string[]=OptionsOfJobsAndCandidate.cookingSkillsStatus
  OtherSkills:string[]=OptionsOfJobsAndCandidate.OtherSkillsStatus
  PreferedCandidateLocation:string[]=OptionsOfJobsAndCandidate.PreferredCandidatelocation
  PreferedCandidateContract:string[]=OptionsOfJobsAndCandidate.PreferredContractStatus
  ReligiousStatusOptions:string[]=OptionsOfJobsAndCandidate.ReligiousStatusOptions
  Education:string[]=OptionsOfJobsAndCandidate.EducationStatusOptions
  // StartDateFlexibility: string[] = [
  //   'Fix',
  //   'Two Weeks',
  //   'One Month',
  //   'Two Months',
  //   'Three Months',
  // ];
  MostImportantSkillsStatus = [
    'Child Care',
    'Chinese',
    'HandyMan',
    'Arabic',
    'Japanese',
    'Filipino',
  ];
}
