import { Component, OnInit } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { ICandidates } from '../../../../models/icandidates';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { environment } from '../../../../../environments/environment.development';
import { Loginservice } from '../../../login/LoginService/loginservice.service';
import { PaymentService } from '../../../../services/payment.service';
import { SubModel } from '../../../../models/sub-model';

@Component({
  selector: 'app-candidate-details',
  standalone: true,
  imports: [RouterOutlet,RouterLink,CommonModule,FormsModule],
  templateUrl: './candidate-details.component.html',
  styleUrl: './candidate-details.component.css'
})
export class CandidateDetailsComponent implements OnInit  {
  candidateId!: number;
  mycandidate!:ICandidates;
  IsLogged: boolean = false;
  Role:string = '';
  url: string=environment.baseUrl;
  activeSubscriber!:SubModel
  constructor(private candidatesservice:FcandidateService, private route: ActivatedRoute ,
     public loginService: Loginservice , private router:Router,private paymentServ:PaymentService){
    this.route.params.subscribe(params => {
      this.candidateId = +params['id']; // Convert to number (if needed)
      console.log(this.candidateId)
    });
console.log(this.mycandidate)
this.loginService.LoggedUser.subscribe({
  next: () => {
    if (this.loginService.LoggedUser.value != null) {
      this.Role =
        this.loginService.LoggedUser.value[
          'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
        ];
        this.IsLogged = true;
      } else {
      this.IsLogged = false;
      this.Role = '';
    }
  },
  error: () => {},
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
  handleContact(id:number){

    if(this.loginService.IsLogged)
      {
        this.paymentServ.getSubscribe().subscribe({
          next: (data:SubModel) => {
            this.activeSubscriber = data; // Assign the fetched candidates to the candidates array
            if(this.activeSubscriber.isActive)
              {
                this.router.navigate(['/contactDetails', id]);
              }
              else{
                this.router.navigateByUrl('/pricing')
              }
          },
          error: (error) => {
            console.error('Error fetching candidates:', error); // Log any errors
          },
          complete: () => {
            console.log('Candidates fetched successfully'); // Log completion
          }
        })


      }
      else{
        this.router.navigateByUrl('/Login')
      }
  }
}
