import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-manage-jobs',
    standalone: true,
    templateUrl: './manage-jobs.component.html',
    styleUrl: './manage-jobs.component.css',
    imports: [NavbarComponent, HeaderComponent]
})
export class ManageJobsComponent {
    
}
