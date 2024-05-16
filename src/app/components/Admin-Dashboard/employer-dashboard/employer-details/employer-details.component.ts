import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IEmployer } from '../../../../models/IEmployer';
import { EmployerService } from '../../../../services/employer.service';

@Component({
  selector: 'app-employer-details',
  standalone: true,
  imports: [],
  templateUrl: './employer-details.component.html',
  styleUrl: './employer-details.component.css'
})
export class EmployerDetailsComponent {
  currentId!: number;
  currentEmployer!: IEmployer;
  constructor(private router: Router, private route: ActivatedRoute, private employerService:EmployerService) { }
  
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.currentId = params['id'];
    });
    this.employerService.getEmployerById(this.currentId).subscribe((res) => {
      this.currentEmployer = res;
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/employerDashboard']);
  }
}
