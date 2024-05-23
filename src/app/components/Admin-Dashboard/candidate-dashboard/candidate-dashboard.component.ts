import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { ICandidates } from '../../../models/icandidates';
import { FcandidateService } from '../../../services/fcandidate.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-dashboard',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, FormsModule],
  templateUrl: './candidate-dashboard.component.html',
  styleUrl: './candidate-dashboard.component.css',
})
export class CandidateDashboardComponent implements OnInit {
  allcandidates!: ICandidates[];
  constructor(
    private candidatesservice: FcandidateService,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.candidatesservice.getAllCandidates().subscribe({
      next: (data: ICandidates[]) => {
        this.allcandidates = data; // Assign the fetched candidates to the candidates array
        console.log(this.allcandidates);
      },
      error: (error) => {
        console.error('Error fetching candidates:', error); // Log any errors
      },
      complete: () => {
        console.log('Candidates fetched successfully'); // Log completion
      },
    });
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
  navigateTodelete(id: number) {
    this.router.navigate(['/delete', id]);
  }
  navigateToEdit(id: number) {
    this.router.navigate(['/candidateResume/Updatelayer', id]);
  }
}
