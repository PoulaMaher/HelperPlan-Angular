import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FindJobComponent } from './find-job/find-job.component';
import { JobListService } from './JobListService/job-list.service';
import { CommonModule } from '@angular/common';
import { Job } from './JobClass/job';
import { MatPaginatorModule } from '@angular/material/paginator';
import { FindjobService } from '../../services/findjob.service';
@Component({
  selector: 'app-job-page',
  standalone: true,
  templateUrl: './job-page.component.html',
  styleUrl: './job-page.component.css',
  imports: [
    HeaderComponent,
    SidebarComponent,
    FindJobComponent,
    CommonModule,
    MatPaginatorModule,
  ],
})
export class JobPageComponent {
  JobData: JobListService = new JobListService();
  Jobs: Job[] = [];
  receivequery(val: any) {
    this.Jobs = this.JobData.Filter(val);
  }
  currentPage: number = 1;
  pageSize: number = 5;
  get startIndex(): number {
    return (this.currentPage - 1) * this.pageSize;
  }

  get endIndex(): number {
    return Math.min(this.startIndex + this.pageSize, this.Jobs.length);
  }

  onPageChange(event: { pageIndex: number }): void {
    this.currentPage = event.pageIndex + 1;
  }
  constructor(_findJob:FindjobService) {
    this.Jobs = this.JobData.Jobs;
    _findJob.getAllJobs().subscribe((data) => {
      console.log(data)
    })
  }
}
