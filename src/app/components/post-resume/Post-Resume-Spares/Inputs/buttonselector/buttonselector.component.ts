import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatCheckbox } from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
@Component({
  selector: 'app-buttonselector',
  standalone: true,
  imports: [MatChipsModule,CommonModule,MatCheckbox],
  templateUrl: './buttonselector.component.html',
  styleUrl: './buttonselector.component.css'
})
export class ButtonselectorComponent {
 @Input() Options:string[] = [];
}
