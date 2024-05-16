import { Component, OnInit } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ICandidate } from '../../../../models/ICandidate';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-description',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,RouterOutlet,FormsModule,CommonModule],
  templateUrl: './add-description.component.html',
  styleUrl: './add-description.component.css'
})
export class AddDescriptionComponent implements OnInit {
  myflag:boolean=false;
  constructor(public candService:FcandidateService){}
  ngOnInit(): void {
   this.flagy()
  }


  onCommentChange(des:any){
    console.log(des.target.value);
    this.candService.mycandidate.description=des.target.value
    this.flagy()
  }
  sendData()
  {

    this.candService.canfile.cands=this.candService.mycandidate;
   this.candService.frmdata.append('cands',JSON.stringify(this.candService.canfile.cands))
   if(this.candService.mycandidate.id==0||this.candService.mycandidate.id==null)
    {
      this.candService.postCandidate(this.candService.frmdata).subscribe({
        next: (data:any) => {
          console.log(data) // Assign the fetched candidates to the candidates array
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
      this.candService.updateCandidate(this.candService.frmdata).subscribe({
        next: (data:any) => {
          console.log(data) // Assign the fetched candidates to the candidates array
        },
        error: (error) => {
          console.error('Error fetching candidates:', error); // Log any errors
        },
        complete: () => {
          console.log('Candidates fetched successfully'); // Log completion
        }
      })
    }

    this.candService.mycandidate=this.candService.resetCandidate()
  }

  flagy(){
    // if( this.candService.mycandidate.description.length>50)
    //   {
    //     this.myflag=false
    //   }
  }
}
