import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Workingexperience } from '../WorkingExperienceClass/workingexperience';
import { CommonModule } from '@angular/common';
import { AddWorkExperienceComponent } from '../add-work-experience/add-work-experience.component';

@Component({
  selector: 'app-working-experience',
  standalone: true,
  templateUrl: './working-experience.component.html',
  styleUrl: './working-experience.component.css',
  imports: [CommonModule, AddWorkExperienceComponent],
})
export class WorkingExperienceComponent {
  month: string[] = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];
  @Output() DeleteWorkingExperience = new EventEmitter<Workingexperience>();
  @Output() UpdateWorkingExperience = new EventEmitter<Workingexperience>();
  @Output() HideAddWorkingExperiencePage = new EventEmitter<boolean>();
  @Input() WorkingExperiences: Workingexperience[] = [];
  UpdateWorkingExperienceToIndex($event:any, index:number) {
    $event.index=index;
    this.UpdateWorkingExperience.emit($event);
  }
  EditDisplay: boolean[] = [];
}
