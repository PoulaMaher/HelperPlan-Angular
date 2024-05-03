import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PersonalInformationDataProviderService {
  constructor() {
    let response = fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        // Extracting official names of countries
        const officialNames = data.map(
          (country: { name: { common: any } }) => country.name.common
        );
        this.CountryStatusOptions = officialNames;
        this.NationalityStatusOptions = officialNames;
      })
      .catch((error) => console.error('Error fetching data:', error));
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const iddArray = data.flatMap(
          (country: {
            idd: { root: any; suffixes: any[] };
            name: { common: any };
          }) => {
            if (country.idd) {
              const countryName = country.name.common;
              const root = country.idd.root;
              const suffixes = country.idd.suffixes;
              return `${countryName}  ${root}${suffixes}`;
            }
            return '';
          }
        );
        this.DialCodeStatusOptions = iddArray;
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  DialCodeStatusOptions: any[] = [];
  ReligiousStatusOptions: string[] = [
    'Christianity',
    'Islam',
    'Judaism',
    'Hinduism',
    'Buddhism',
    'Sikhism',
    'Jainism',
    'Atheism',
    'Agnosticism',
    'Other (please specify)',
  ];
  NationalityStatusOptions: string[] = [];
  CountryStatusOptions: string[] = [];
  MaritalStatusOptions: string[] = [
    'Single',
    'Married',
    'Divorced',
    'Widowed',
    'Separated',
    // Add more marital status options as needed
  ];
  EducationStatusOptions: string[] = [
    'No formal education',
    'Primary education',
    'Secondary education',
    'Vocational qualification',
    "Bachelor's degree",
    "Master's degree",
    'Doctorate or equivalent',
    // Add more education level options as needed
  ];
  KidsDetailsOptions: string[] = ['0','1', '2', '3', '4', '5', '+5'];
}
