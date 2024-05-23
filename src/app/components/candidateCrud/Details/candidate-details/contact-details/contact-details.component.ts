import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentService } from '../../../../../services/payment.service';
import { FcandidateService } from '../../../../../services/fcandidate.service';
import { ICandidates } from '../../../../../models/icandidates';
import { environment } from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-contact-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './contact-details.component.html',
  styleUrl: './contact-details.component.css'
})
export class ContactDetailsComponent implements OnInit {
  candidateId!: number;
  mycandidate!:ICandidates;
  photoUrl:string=environment.baseUrl
  constructor(private candidatesservice:FcandidateService, private route: ActivatedRoute , private router:Router,private paymentServ:PaymentService)
  {
    this.route.params.subscribe(params => {
      this.candidateId = +params['id']; // Convert to number (if needed)
      console.log(this.candidateId)
    });
  }
 ngOnInit(): void {
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

}
