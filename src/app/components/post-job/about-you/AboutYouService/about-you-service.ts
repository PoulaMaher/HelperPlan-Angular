import { Injectable } from '@angular/core';
import { OptionsOfJobsAndCandidate } from '../../../OptionsOfJobsAndCandidates/options-of-jobs-and-candidate';

@Injectable({
  providedIn: 'root',
})
export class AboutYouService {
  constructor()
  {
    fetch('https://restcountries.com/v3.1/all')
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
  Countries:string[]=[]
  DayOff: string[] = OptionsOfJobsAndCandidate.DayOffPreferenceStatus;
  Accomodation: string[] = OptionsOfJobsAndCandidate.AccomodationPreferenceStatus;
  Currency :string[]=OptionsOfJobsAndCandidate.CurrencyStatus
  EmployerType: string[] = ['Family', 'Company', 'Other'];
  SalaryOffer: string[] = ['Dont-Mention', 'Fix', 'Range', 'Else'];
  FamilyType: string[] = [
    '1 Adult',
    '1 Adult + 1 Kid',
    '1 Adult + 2 Kid',
    '1 Adult + 3 Kid',
    '1 Adult + 4 Kid',
    '1 Adult + 5 Kid',
    '2 Adult',
    '2 Adult + 1 Kid',
    '2 Adult + 2 Kid',
    '2 Adult + 3 Kid',
    '2 Adult + 4 Kid',
    '2 Adult + 5 Kid',
    '3 Adult',
    '3 Adult + 1 Kid',
    '3 Adult + 2 Kid',
    '3 Adult + 3 Kid',
    '3 Adult + 4 Kid',
    '3 Adult + 5 Kid',
    '4 Adult',
    '4 Adult + 1 Kid',
    '4 Adult + 2 Kid',
    '4 Adult + 3 Kid',
    '4 Adult + 4 Kid',
    '4 Adult + 5 Kid',
  ];
  Description:string[]=["Based On Experience","Based On Government Law","To Be Discussed"]
}
