import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FcandidateService } from '../../services/fcandidate.service';
import { ICandidate } from '../../models/ICandidate';
import { IFiltercandidate } from '../../models/ifiltercandidate';
import { CommonModule } from '@angular/common';
import { ICandidates } from '../../models/icandidates';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment.development';

@Component({
  selector: 'app-home-carousel',
  standalone: true,
  imports: [NgbCarouselModule,CommonModule],
  templateUrl: './home-carousel.component.html',
  styleUrl: './home-carousel.component.css'
})
export class HomeCarouselComponent implements OnInit {
  randomCandidates: ICandidates[] = [];
  filter!: IFiltercandidate;
  env:string = environment.baseUrl;

  constructor(private candidateService: FcandidateService, private router:Router) { }

  ngOnInit() {
    this.candidateService.getAllCandidates().subscribe({
      next: (res) => {
        this.randomCandidates = res;
      },
      error: (err) => {
        console.log(err);
      }
    });
  }
  navigateToDetails(id: number) {
    this.router.navigate(['/details', id]);
  }
  handleDate(date:any)
  {
    return new Date(date)
  }
}
