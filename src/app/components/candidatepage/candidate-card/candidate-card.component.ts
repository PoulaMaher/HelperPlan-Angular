import { HttpClientModule } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ICandidate } from '../../../models/ICandidate';
import { FcandidateService } from '../../../services/fcandidate.service';
import { IFiltercandidate } from '../../../models/ifiltercandidate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule],
  templateUrl: './candidate-card.component.html',
  styleUrl: './candidate-card.component.css'
})
export class CandidateCardComponent {
  testing:ICandidate[]=[]
  myownfiltered:ICandidate[]=[]
  @Input() recievedtest!:IFiltercandidate
  @Input() recievedchange!:boolean
constructor(private candidatesservice:FcandidateService){


}

ngOnChanges(changes: SimpleChanges): void {
console.log(this.recievedtest)
  this.candidatesservice.getCandidates(this.recievedtest).subscribe({
    next: (data:ICandidate[]) => {
      this.myownfiltered = data; // Assign the fetched candidates to the candidates array

    },
    error: (error) => {
      console.error('Error fetching candidates:', error); // Log any errors
    },
    complete: () => {
      console.log('Candidates fetched successfully'); // Log completion
    }
  });
}

ngOnInit(): void {
  // Assuming recievedtest is populated with filter criteria before calling getCandidates
  this.candidatesservice.getCandidates(this.recievedtest).subscribe({


    next: (data:ICandidate[]) => {
      this.myownfiltered = data; // Assign the fetched candidates to the candidates array
      console.log(this.myownfiltered)
    },
    error: (error) => {
      console.error('Error fetching candidates:', error); // Log any errors
    },
    complete: () => {
      console.log('Candidates fetched successfully'); // Log completion
    }
  });
}



    }

