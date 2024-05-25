import { HttpClientModule } from '@angular/common/http';
import { Component, Input, SimpleChanges } from '@angular/core';
import { ICandidate } from '../../../models/ICandidate';
import { FcandidateService } from '../../../services/fcandidate.service';
import { IFiltercandidate } from '../../../models/ifiltercandidate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgbModule, NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment.development';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
  imports: [HttpClientModule,FormsModule,CommonModule,MatPaginatorModule],
  templateUrl: './candidate-card.component.html',
  styleUrl: './candidate-card.component.css'
})
export class CandidateCardComponent {
  testing:ICandidate[]=[]
  myownfiltered:ICandidate[]=[]
  @Input() recievedtest!:IFiltercandidate
  @Input() recievedchange!:boolean
  count!:number
  env:string = environment.baseUrl;
constructor(private candidatesservice:FcandidateService, private router: Router){


}

ngOnChanges(changes: SimpleChanges): void {
this.candidatesservice.getcount().subscribe({
  next:(data:number) => {
    this.count = data
  }
})
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
navigateToDetails(id: number) {
  this.router.navigate(['/details', id]);
}
pageChange(page:PageEvent){

  console.log(page.pageIndex)
  console.log(page.pageSize)

  this.recievedtest.pageIndex=page.pageIndex
  this.recievedtest.pageSize=page.pageSize

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
handleDate(date:any)
{
  return new Date(date)
}

    }

