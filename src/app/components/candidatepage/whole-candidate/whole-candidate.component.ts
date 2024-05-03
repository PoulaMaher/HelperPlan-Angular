import { Component } from '@angular/core';
import { CandidateCardComponent } from '../candidate-card/candidate-card.component';
import { CandidateHeaderComponent } from '../candidate-header/candidate-header.component';
import { CandidateSidebarComponent } from '../candidate-sidebar/candidate-sidebar.component';
import { HttpClientModule } from '@angular/common/http';
import { IFiltercandidate } from '../../../models/ifiltercandidate';
import { FcandidateService } from '../../../services/fcandidate.service';

@Component({
  selector: 'app-whole-candidate',
  standalone: true,
  imports: [HttpClientModule,CandidateCardComponent,CandidateHeaderComponent,CandidateSidebarComponent],
  templateUrl: './whole-candidate.component.html',
  styleUrl: './whole-candidate.component.css'
})
export class WholeCandidateComponent {
  testy!:IFiltercandidate
  constructor(private mytestservice:FcandidateService)
  {
  }
  ngOnInit(): void {
    this.testy=this.mytestservice.testingfilter
   }
   change(value: IFiltercandidate) {
    this.testy = value;


    this.testy.Ischange = value.Ischange
   // console.log(this.testy.ischange)

    }
}
