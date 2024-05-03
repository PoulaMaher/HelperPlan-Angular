import { Component, Input, OnInit } from '@angular/core';
import { Job } from '../JobClass/job';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-job',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './find-job.component.html',
  styleUrl: './find-job.component.css'
})
export class FindJobComponent{
@Input() Job:Job= new Job();
}
