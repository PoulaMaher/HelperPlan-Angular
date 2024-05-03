import { Component} from '@angular/core';
import { ProfileComponent } from "../profile/profile.component";
import { ChangePasswordComponent } from "../change-password/change-password.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-myaccount',
    standalone: true,
    templateUrl: './myaccount.component.html',
    styleUrl: './myaccount.component.css',
    imports: [ProfileComponent, ChangePasswordComponent,RouterOutlet]
})
export class MyaccountComponent {

}
