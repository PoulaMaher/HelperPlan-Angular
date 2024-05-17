import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.css'
})
export class CandidateDashboardComponent {
  constructor(private httpClient:HttpClient, ){}
}
