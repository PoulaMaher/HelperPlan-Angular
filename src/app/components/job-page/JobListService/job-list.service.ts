import { Injectable } from '@angular/core';
import { Job } from '../JobClass/job';
import { QueryParams } from '../sidebar/Query-Params/query-params';
import { SideBarServiceService } from '../sidebar/SideBarService/side-bar-service.service';
import { JobClass } from '../../post-job/JobClass/job-class';
@Injectable({
  providedIn: 'root',
})
export class JobListService {
  constructor() {}
  SideBarServiceService: SideBarServiceService = new SideBarServiceService();
  Jobs: Job[] = [];
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
}
