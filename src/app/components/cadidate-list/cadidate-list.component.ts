import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-cadidate-list',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './cadidate-list.component.html',
  styleUrl: './cadidate-list.component.css'
})
export class CadidateListComponent {

}
