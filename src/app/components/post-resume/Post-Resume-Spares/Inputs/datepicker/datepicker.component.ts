import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {provideNativeDateAdapter} from '@angular/material/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-datepicker',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatDatepickerModule,FormsModule],
  providers:[provideNativeDateAdapter()],
  templateUrl: './datepicker.component.html',
  styleUrl: './datepicker.component.css'
})
export class DatepickerComponent{
  @Input() PlaceHolder:string='';
  @Input() class:string=''
  @Input() ReceivedDate = new Date()
  @Input() CurrentDate = new Date()
  @Output() dateChange = new EventEmitter<Date> ();
  selectedDate: Date=new Date();
  ngOnInit(): void {
    this.dateChange.emit(this.ReceivedDate);
  }
  onDateChange(newDate: Date) {
    this.selectedDate = newDate;
    this.dateChange.emit(this.selectedDate);
  }
}
