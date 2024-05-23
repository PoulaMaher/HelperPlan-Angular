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
        job.jobPosition == queryParams.JobPosition ||
        queryParams.JobPosition == 'Any'
      );
    });
    return filteredJobs;
  }
}
