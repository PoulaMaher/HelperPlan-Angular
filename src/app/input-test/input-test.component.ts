import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
@Component({
  selector: 'app-input-test',
  standalone: true,
  providers: [],
  imports: [MatChipsModule],
  templateUrl: './input-test.component.html',
  styleUrl: './input-test.component.css',
})
export class InputTestComponent {}
