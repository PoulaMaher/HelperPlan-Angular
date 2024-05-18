import { Component, OnInit } from '@angular/core';
import { ICandidates } from '../../../../models/icandidates';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatelayer',
  standalone: true,
  imports: [],
  templateUrl: './updatelayer.component.html',
  styleUrl: './updatelayer.component.css'
})
export class UpdatelayerComponent implements OnInit {
  candidateId!: number;
  mycandidate!:ICandidates
  constructor(private candidatesservice:FcandidateService,private route: ActivatedRoute,private router:Router){
    this.route.params.subscribe(params => {
      this.candidateId = +params['id']; // Convert to number (if needed)
      console.log(this.candidateId)
    });

  }
  ngOnInit(): void {
    this.candidatesservice.getCandidateById(this.candidateId).subscribe({
      next: (data:ICandidates) => {
        this.candidatesservice.mycandidate = data; // Assign the fetched candidates to the candidates array
        console.log(this.mycandidate)
        console.log('abdoooooooooo')
        this.router.navigate(['/candidateResume/candidatePersonalInfo']);

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
