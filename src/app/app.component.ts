import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { Loginservice } from './components/login/LoginService/loginservice.service';
import { PostJobComponent } from './components/post-job/post-job.component';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [LoginComponent, RouterOutlet, FooterComponent, NavbarComponent,PostJobComponent],
})
export class AppComponent {
  constructor(private loginService: Loginservice, private router: Router,private route: ActivatedRoute) {
    if (localStorage.getItem('HelperPlanJWTToken') != null) {
      this.loginService.DecodeUser(localStorage.getItem('HelperPlanJWTToken'))
      this.router.navigateByUrl('/myaccount');
    } else {
      this.router.navigateByUrl('/Login');
    }
  }
  title = 'HelperPlace';
  ClassesCSS: string = 'Post-Resume';
}
