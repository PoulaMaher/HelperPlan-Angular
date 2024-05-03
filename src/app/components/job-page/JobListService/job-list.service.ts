import { Injectable } from '@angular/core';
import { Job } from '../JobClass/job';
import { QueryParams } from '../sidebar/Query-Params/query-params';
import { SideBarServiceService } from '../sidebar/SideBarService/side-bar-service.service';
@Injectable({
  providedIn: 'root',
})
export class JobListService {
  SideBarServiceService: SideBarServiceService = new SideBarServiceService();
  Jobs: Job[] = [
    // {
    //   Position: 'Domestic helper',
    //   StartDate: new Date('2024-05-23'),
    //   Type: 'full time',
    //   YearsOfExperience: 1,
    //   Gender: 'Male',
    //   Country: 'USA',
    //   contract: 'Finished',
    //   LanguageSkills: ['arabic'],
    //   MainSkills: [],
    // },
    // {
    //   Position: 'Driver',
    //   StartDate: new Date('2024-06-23'),
    //   Type: 'part time',
    //   YearsOfExperience: 2,
    //   Gender: 'Female',
    //   Country: 'Canada',
    //   contract: 'Open Contract',
    //   LanguageSkills: ['english'],
    //   MainSkills: [],
    // },
    // {
    //   Position: 'Domestic helper',
    //   StartDate: new Date('2024-07-23'),
    //   Type: 'full time',
    //   YearsOfExperience: 3,
    //   Gender: 'Male',
    //   Country: 'UK',
    //   contract: 'Over Seas',
    //   LanguageSkills: ['hindi'],
    //   MainSkills: [],
    // },
    // {
    //   Position: 'Driver',
    //   StartDate: new Date('2024-08-23'),
    //   Type: 'full time',
    //   YearsOfExperience: 4,
    //   Gender: 'Female',
    //   Country: 'Germany',
    //   contract: 'Transfer',
    //   LanguageSkills: ['spanish'],
    //   MainSkills: [],
    // },
    // {
    //   Position: 'Domestic helper',
    //   StartDate: new Date('2024-09-23'),
    //   Type: 'part time',
    //   YearsOfExperience: 5,
    //   Gender: 'Male',
    //   Country: 'France',
    //   contract: 'Break Contract',
    //   LanguageSkills: ['Germany'],
    //   MainSkills: [],
    // },
  ];
  Filter(queryParams: QueryParams): Job[] {
    console.log(queryParams);
    let filteredJobs: Job[] = this.Jobs.filter((job) => {
      return (
        job.Position == queryParams.JobPosition ||
        queryParams.JobPosition == 'Any'
      );
    });
    filteredJobs = filteredJobs.filter((job) => {
      return job.Gender == queryParams.gender || queryParams.gender == 'Any';
    });
    filteredJobs = filteredJobs.filter((job) => {
      return job.Type == queryParams.JobType || queryParams.JobType == 'Any';
    });
    filteredJobs = filteredJobs.filter((job) => {
      return job.StartDate>new Date(queryParams.startdate);
    });
    filteredJobs = filteredJobs.filter((job) => {
      return (
        queryParams.countrysSelectedItems.includes(job.Country) ||
        queryParams.countrysSelectedItems.length == 0
      );
    });
    filteredJobs = filteredJobs.filter((job) => {
      return (
        queryParams.contractSelectedItems.includes(job.contract) ||
        queryParams.contractSelectedItems.length == 0
      );
    });
    filteredJobs = filteredJobs.filter((job) => {
      return job.YearsOfExperience >= Number(queryParams.WorkingExperience);
    });
    return filteredJobs;
  }
  constructor() {
    let countries: any;
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        // Extracting official names of countries
        const officialNames = data.map(
          (country: { name: { common: any } }) => country.name.common
        );
        countries = officialNames;
      })
      .then((i) => {
        for (let i = 0; i < 50; i++) {
          const job = new Job();
          job.Position = Math.random() < 0.5 ? 'Driver' : 'Domestic helper';
          job.StartDate = new Date(this.getRandomDate()); // Set to current date by default
          job.Type = Math.random() < 0.5 ? 'full time' : 'part time';
          job.YearsOfExperience = Math.floor(Math.random() * 10); // Random value between 0 and 9
          job.Gender = Math.random() < 0.5 ? 'Male' : 'Female';
          job.contract =
            this.SideBarServiceService.contractDropdownList[
              Math.floor(
                Math.random() *
                  this.SideBarServiceService.contractDropdownList.length
              )
            ];
          job.MainSkills = [
            this.SideBarServiceService.skillsDropdownList[
              Math.floor(
                Math.random() *
                  this.SideBarServiceService.skillsDropdownList.length
              )
            ],
          ];
          job.LanguageSkills = [
            this.SideBarServiceService.languageDropdownList[
              Math.floor(
                Math.random() *
                  this.SideBarServiceService.languageDropdownList.length
              )
            ],
          ];
          job.Country =
            countries[
              Math.floor(
                Math.random() *
                  this.SideBarServiceService.countrylocationDropdownList.length
              )
            ];
          this.Jobs.push(job);
        }
      });
  }
  getRandomDate(): Date {
    const currentDate = new Date(); // Get the current date

    // Generate random values for year, month, and day
    let year = currentDate.getFullYear();
    let month = Math.floor(Math.random() * 12);
    let day = Math.floor(Math.random() * 31) + 1; // Random day between 1 and 31

    // Ensure the generated date is after the current date
    while (new Date(year, month, day) <= currentDate) {
      year =
        Math.floor(Math.random() * (2025 - currentDate.getFullYear())) +
        currentDate.getFullYear();
      month = Math.floor(Math.random() * 12);
      day = Math.floor(Math.random() * 31) + 1;
    }

    // Return the random date
    return new Date(year, month, day);
  }
}
