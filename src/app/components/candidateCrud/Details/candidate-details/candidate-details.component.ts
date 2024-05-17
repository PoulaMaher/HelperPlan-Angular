import { Component, OnInit } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { ICandidates } from '../../../../models/icandidates';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.css'
})
export class CandidateDetailsComponent implements OnInit  {
  candidateId!: number;
  mycandidate!:ICandidates
  constructor(private candidatesservice:FcandidateService,private route: ActivatedRoute){
    this.route.params.subscribe(params => {
      this.candidateId = +params['id']; // Convert to number (if needed)
      console.log(this.candidateId)
    });


  }
  ngOnInit(): void {
    console.log(this.mycandidate)
    this.candidatesservice.getCandidateById(this.candidateId).subscribe({
      next: (data:ICandidates) => {
        this.mycandidate = data; // Assign the fetched candidates to the candidates array
        console.log(this.mycandidate)
      },
      error: (error) => {
        console.error('Error fetching candidates:', error); // Log any errors
      },
      complete: () => {
        console.log('Candidates fetched successfully'); // Log completion
      }
    });

  }
  getCompletionYearDate(ed:any): string {
    if ( ed) {
      const date = new Date(ed);
      return date.toLocaleDateString().toString();
    }
    return '';
  }
  getref(ref:boolean): string {
    if ( ref) {
      return 'i have reference letter'
    }
    else
    return 'i dont have reference letter'
  }
}
