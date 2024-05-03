import { Component } from '@angular/core';
import { AgencyHeaderComponent } from "../agency-header/agency-header.component";
import { AgencyComponent } from "../agency/agency.component";

@Component({
    selector: 'app-whole-agency-page',
    standalone: true,
    templateUrl: './whole-agency-page.component.html',
    styleUrl: './whole-agency-page.component.css',
    imports: [AgencyHeaderComponent, AgencyComponent]
})
export class WholeAgencyPageComponent {

}
