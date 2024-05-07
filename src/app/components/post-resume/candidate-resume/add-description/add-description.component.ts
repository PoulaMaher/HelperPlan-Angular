import { Component } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ICandidate } from '../../../../models/ICandidate';

@Component({
  selector: 'app-add-description',
  standalone: true,
  imports: [RouterLinkActive,RouterLink,RouterOutlet],
  templateUrl: './add-description.component.html',
  styleUrl: './add-description.component.css'
})
export class AddDescriptionComponent {
  myflag:boolean=true;
  constructor(private candService:FcandidateService){}


  onCommentChange(des:any){
    console.log(des.target.value);
    this.candService.mycandidate.description=des.target.value
    this.flagy()
  }
  sendData()
  {

    //console.log(this.candService.mycandidate)
    this.candService.canfile.cands=this.candService.mycandidate;

    console.log("here")
  //  console.log(this.candService.canfile.cands)
  //  console.log(this.candService.canfile.file)
   //const f=new FormData();
   //f.append('cands',JSON.stringify(this.candService.canfile.cands))
   //f.append('file',this.candService.canfile.file??null)
   console.log(JSON.stringify(this.candService.canfile.cands))
   this.candService.frmdata.append('cands',JSON.stringify(this.candService.canfile.cands))
   //console.log( this.candService.frmdata.get('file'))
  // console.log( this.candService.frmdata.get('cands') )
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
  flagy(){
    if( this.candService.mycandidate.description.length>50)
      {
        this.myflag=false
      }
  }
}
