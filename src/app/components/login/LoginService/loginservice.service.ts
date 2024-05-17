import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Loggeduser } from '../LoggedUser/loggeduser';
import { Router, defaultUrlMatcher } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(public http: HttpClient, private router: Router) {}
  LoggedUser = new BehaviorSubject(null);
  IsLogged: boolean = false;
  LogUser(LoggedUser: Loggeduser): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/Account/Login`,
      LoggedUser
    );
  }
  CheckIfTokenIsExpired() {
    let CurrentDate = new Date();
    if (this.LoggedUser.value != null)
      if (CurrentDate.getSeconds() > this.LoggedUser.value!['exp']) {
        localStorage.removeItem('HelperPlanJWTToken');
        this.router.navigateByUrl('/Login');
      } else {
        this.DecodeUser(localStorage.getItem('HelperPlanJWTToken'));
      }
  }
  DecodeUser(Token: any) {
    localStorage.setItem('HelperPlanJWTToken', Token);
    let DecodedUser: any = jwtDecode(
      localStorage.getItem('HelperPlanJWTToken')!
    );
    this.LoggedUser.next(DecodedUser);
    this.IsLogged = true;
    console.log();
    this.RouteConsideringToRole();
  }
  RouteConsideringToRole() {
    switch (
      this.LoggedUser.value![
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ]
    ) {
      case 'Candidate':
        this.router.navigateByUrl('/job');
        break;
      case 'Employer':
        this.router.navigateByUrl('/candidatepage');
        break;
    }
  }
  LogOutUser() {
    localStorage.removeItem('HelperPlanJWTToken');
    this.IsLogged = false;
    this.LoggedUser.next(null);
    this.router.navigate(['/Login']);
  }
}
