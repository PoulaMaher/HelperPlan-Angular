import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FcandidateService } from '../../services/fcandidate.service';
import { ICandidate } from '../../models/ICandidate';
import { IFiltercandidate } from '../../models/ifiltercandidate';
import { CommonModule } from '@angular/common';
import { ICandidates } from '../../models/icandidates';

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

  constructor(private candidateService: FcandidateService) { }

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
}
