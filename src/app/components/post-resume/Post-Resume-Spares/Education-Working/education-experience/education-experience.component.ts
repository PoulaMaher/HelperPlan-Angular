import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Educationexperience } from '../EducationExperienceClass/educationexperience';
import { MatSelectComponent } from '../../Inputs/mat-select/mat-select.component';
import { FormsModule } from '@angular/forms';
import { AddEducationExperienceComponent } from '../add-education-experience/add-education-experience.component';

@Component({
  selector: 'app-education-experience',
  standalone: true,
  templateUrl: './education-experience.component.html',
  styleUrl: './education-experience.component.css',
  imports: [
    CommonModule,
    EducationExperienceComponent,
    MatSelectComponent,
    FormsModule,
    AddEducationExperienceComponent,
  ],
})
export class EducationExperienceComponent {
  @Input() EducationExperiences: Educationexperience[] = [];
  @Output() HideAddEducationExperiencePage = new EventEmitter<boolean>();
  @Output() DeleteEducationExperience = new EventEmitter<Educationexperience>();
  @Output() UpdateEducationExperience = new EventEmitter<Educationexperience>();
    UpdateAndAssignIndex($event:any, index:number)
  {
    $event.index = index
    this.UpdateEducationExperience.emit($event);
  };
  RequiredEducationExperience: Educationexperience = new  Educationexperience();
  EditDisplay: boolean[] = [];
}
