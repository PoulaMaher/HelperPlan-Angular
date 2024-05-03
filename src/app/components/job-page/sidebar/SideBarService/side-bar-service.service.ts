import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SideBarServiceService {
  constructor() {
    this.contractDropdownList = [
      'Finished',
      'Open Contract',
      'Over Seas',
      'Transfer',
      'Break Contract',
    ];
    this.languageDropdownList = [
      'Arabic',
      'English',
      'Germany',
      'Spanish',
      'Hindi',
    ];
    this.skillsDropdownList = [
      'Baby Care',
      'Child Care',
      'Teen Care',
      'Pet Care',
      'Elderly Care',
      'Tutoring',
      'HouseKeeping',
      'Cooking',
      'Driving',
      'Marketing',
      'New Delhi',
    ];
    let response = fetch('https://restcountries.com/v3.1/all')
    .then((response) => response.json())
    .then((data) => {
      // Extracting official names of countries
      const officialNames = data.map(
        (country: { name: { common: any } }) => country.name.common
      );
      this.countrylocationDropdownList = officialNames;
    })
    .catch((error) => console.error('Error fetching data:', error));
  }
  countrylocationDropdownList: any = [];
  contractDropdownList: any = [];
  languageDropdownList: any = [];
  skillsDropdownList: any = [];
}
