import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../JobClass/job';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { FindjobService } from '../../../services/findjob.service';
import { IJob } from '../../../models/IJob';

@Component({
  selector: 'app-find-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent implements OnInit{
  @Input() Job:Job= new Job();
  jobs!: IJob[];
  constructor(private httpClient:HttpClient, private jobService:FindjobService) {
    //this.getJobs();
  }
  ngOnInit(): void {

  }

  getJobs() {
    this.jobService.getAllJobs().subscribe((res)=> {
      this.jobs = res;
      console.log(res)
    })
  }
}
