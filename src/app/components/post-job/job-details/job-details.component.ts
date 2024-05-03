import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { SlideToggleComponent } from '../../post-resume/Post-Resume-Spares/Inputs/slide-toggle/slide-toggle.component';
import { TextEditorComponent } from '../Inputs/ngx-text-editor/text-editor.component';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { JobDetailsClass } from './JobDetailsClass/job-details-class';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-job-details',
  standalone: true,
  imports: [SlideToggleComponent,TextEditorComponent,MdbFormsModule,FormsModule,ReactiveFormsModule],
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css', '../post-job.component.css'],
})
export class JobDetailsComponent{
  @Input() formgroup!: FormGroup;
  JobDetails:JobDetailsClass=new JobDetailsClass();
}
