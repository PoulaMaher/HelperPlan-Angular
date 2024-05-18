import {
  Component,
  Input,
} from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MultipleSearchSelectComponent } from '../../post-resume/Post-Resume-Spares/Inputs/multiple-search-select/multiple-search-select.component';
import { AboutYouService } from './AboutYouService/about-you-service';
import { FormGroup, FormsModule, ReactiveFormsModule,Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SlideToggleComponent } from '../../post-resume/Post-Resume-Spares/Inputs/slide-toggle/slide-toggle.component';
@Component({
  selector: 'app-about-you',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MdbFormsModule,
    MultipleSearchSelectComponent,
    CommonModule,
    SlideToggleComponent,
  ],
  templateUrl: './about-you.component.html',
  styleUrls: ['./about-you.component.css', '../post-job.component.css'],
})
export class AboutYouComponent {
  updatesalaryvalidation(_t55: string) {
    this.AboutYouService.SalaryOffer.forEach((element)=>{
      this.AboutYouForm.get(element)?.setErrors(null);
    })
    this.AboutYouForm.get(_t55)?.setErrors(Validators.required);
  }
  updateemployervalidation(_t55: string) {
    if(_t55=="Family")
    this.AboutYouForm.get(_t55)?.setErrors(Validators.required);
    else{
      this.AboutYouForm.get("Family")?.setErrors(null);
    }
  }
  EmployerType: string = '';
  ReceiveByEmail: Boolean = false;
  MonthlySalaryOffer: string = '';
  AboutYouService: AboutYouService = new AboutYouService();
  @Input() AboutYouForm!: FormGroup;
}
