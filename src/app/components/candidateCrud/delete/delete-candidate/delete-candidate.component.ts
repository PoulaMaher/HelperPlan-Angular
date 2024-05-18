import { Component } from '@angular/core';
import { ICandidates } from '../../../../models/icandidates';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-candidate',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,FormsModule],
  templateUrl: './delete-candidate.component.html',
  styleUrl: './delete-candidate.component.css'
})
export class DeleteCandidateComponent {
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
  deleteCandidate(candidateId:number){
    debugger
    this.candidatesservice.deleteCandidate(this.candidateId).subscribe(
      ()=>{
        console.log('Candidate deleted')
      }
    );
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
