import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Loggeduser } from '../LoggedUser/loggeduser';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.development';
import { UserRegister } from '../../register/UserRegister/user-register';
@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  constructor(public http: HttpClient, private router: Router) {}
  LoggedUser = new BehaviorSubject(null);
  Token: string | null = '';
  IsLogged: boolean = false;
  AddUser(Role: string, RegisteredUser: UserRegister): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/api/Account/Register?Role=${Role}`,
      RegisteredUser
    );
  }
  LogUser(LoggedUser: Loggeduser): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/api/Account/Login`,
      LoggedUser
    );
  }
  UpdateUser(LoggedUser: Loggeduser): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/api/Account/Login`,
      LoggedUser
    );
  }
  CheckIfTokenIsExpired() {
    this.DecodeUser(localStorage.getItem('HelperPlanJWTToken'));
    if (new Date(this.LoggedUser.value!['exp'] * 1000) < new Date()) {
      this.LogOutUser();
    }
  }
  DecodeUser(Token: any) {
    localStorage.setItem('HelperPlanJWTToken', Token);
    this.Token = Token;
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
        case 'Admin':
          this.router.navigateByUrl('/dashboard/adminDashboard');
          break;  
    }
  }
  LogOutUser() {
    localStorage.removeItem('HelperPlanJWTToken');
    this.IsLogged = false;
    this.LoggedUser.next(null);
    this.Token = null;
    this.router.navigate(['/Login']);
  }
}
