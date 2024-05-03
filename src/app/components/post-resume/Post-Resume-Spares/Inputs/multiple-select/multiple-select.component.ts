import {Component, Input} from '@angular/core';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatOptionSelectionChange } from '@angular/material/core';

@Component({
  selector: 'app-multiple-select',
  templateUrl: 'multiple-select.component.html',
  styleUrl: 'multiple-select.component.css',
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, FormsModule, ReactiveFormsModule],
})
export class multipleselectcomponent {
Push($event: MatOptionSelectionChange<string>) {
}
  @Input() PlaceHolder:string='';
  @Input() class:string='';
  toppings = new FormControl('');
  @Input() Options: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
}
