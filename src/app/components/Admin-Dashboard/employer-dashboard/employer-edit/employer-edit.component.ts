import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { IEmployer } from '../../../../models/IEmployer';
import { EmployerService } from '../../../../services/employer.service';

@Component({
  selector: 'app-employer-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './employer-edit.component.html',
  styleUrl: './employer-edit.component.css'
})
export class EmployerEditComponent {
  currentEmpId!: number;
  employee!: IEmployer;

  constructor(private router: Router, private employerService: EmployerService, private route:ActivatedRoute) { }
  
  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.currentEmpId = params['id'];
    });

    this.employerService.getEmployerById(this.currentEmpId).subscribe((res) => {
      console.log(res)
      this.employee = res;
    })
  }

  onSubmit() { 
    this.employerService.updateEmployer(this.employee, this.currentEmpId).subscribe((res) => {
      console.log(res)
      this.router.navigate(['/dashboard/employerDashboard']);
    })
  }

  back(): void {
    this.router.navigate(['/dashboard/employerDashboard']);
  }
}
