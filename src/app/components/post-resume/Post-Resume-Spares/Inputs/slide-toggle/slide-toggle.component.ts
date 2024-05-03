import { Component,EventEmitter,Input, Output} from '@angular/core';
import { FormsModule } from '@angular/forms';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-slide-toggle',
  standalone: true,
  imports: [MatSlideToggleModule,FormsModule],
  templateUrl: './slide-toggle.component.html',
  styleUrl: './slide-toggle.component.css'
})
export class SlideToggleComponent {
  @Input() PlaceHolder : string=''
  @Input() ReceivedValue :boolean=false
  @Output() ValueChanged = new EventEmitter<boolean>()
}

