import { Component } from '@angular/core';
import { FcandidateService } from '../../../../services/fcandidate.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

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
    console.log(this.candService.mycandidate)
    this.candService.postCandidate(this.candService.mycandidate).subscribe({

    })
  }
  flagy(){
    if( this.candService.mycandidate.description.length>50)
      {
        this.myflag=false
      }
  }
}
