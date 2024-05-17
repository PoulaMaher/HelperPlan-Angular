import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonPipe } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
@Component({
  selector: 'app-multiple-choice',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, MatCheckboxModule, JsonPipe],
  templateUrl: './multiple-choice.component.html',
  styleUrl: './multiple-choice.component.css',
})
export class MultipleChoiceComponent {
  PushOrPull(SelectedBox: string, checked: any) {
    if (checked.checked) {
      this.SelectedValues.push(SelectedBox);
    } else {
      const index = this.SelectedValues.indexOf(SelectedBox);
      this.SelectedValues.splice(index, 1);
    }
    this.SetChoices.emit(this.SelectedValues);
  }
  @Input() Options: string[] = [];
  @Input() PlaceHolder: string = '';
  @Output() SetChoices = new EventEmitter<string[]>();
  @Input()SelectedValues: string[] = [];
  constructor() {}
}
