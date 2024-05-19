import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { Loggeduser } from '../LoggedUser/loggeduser';
import { Router, defaultUrlMatcher } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.development';
import { UserRegister } from '../../register/UserRegister/user-register';
import { Changes } from '../../profile/ChangesClass/changes';
import { PasswordChanges } from '../../change-password/PasswordChanges/password-changes';
import { AbstractControl } from '@angular/forms';
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
      `${environment.baseUrl}/Account/Register?Role=${Role}`,
      RegisteredUser
    );
  }
  GetUserDetails(): Observable<any> {
    return this.http.get(
      `${environment.baseUrl}/api/Account/GetUserDetails?UserId=${
        this.LoggedUser.value![
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      }`
    );
  }
  LogUser(LoggedUser: Loggeduser): Observable<any> {
    return this.http.post(
      `${environment.baseUrl}/Account/Login`,
      LoggedUser
    );
  }

  

  UpdateUser(changes: Changes): Observable<any> {
    return this.http.patch(
      `${environment.baseUrl}/api/Account/UpdateUser?UserId=${
        this.LoggedUser.value![
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      }`,
      changes
    );
  }
  UpdateUserPassword(PasswordChanges: PasswordChanges): Observable<any> {
    return this.http.patch(
      `${environment.baseUrl}/api/Account/UpdateUserPassword?UserId=${
        this.LoggedUser.value![
          'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'
        ]
      }`,
      PasswordChanges
    );
  }
  IfTokenIsExpired() {
    this.DecodeUser(localStorage.getItem('HelperPlanJWTToken'));
    if (new Date(this.LoggedUser.value!['exp'] * 1000) < new Date()) {
      return true;
    } else {
      return false;
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
  passwordMatchValidator(
    control: AbstractControl
  ): { [key: string]: boolean } | null {
    const password = control.get('NewPassword');
    const confirmPassword = control.get('ConfirmPassword');
    if (
      password &&
      confirmPassword &&
      password.value !== confirmPassword.value
    ) {
      return { passwordMismatch: true };
    }
    return null;
  }
}
