import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,BehaviorSubject } from 'rxjs';
import { Loggeduser } from '../LoggedUser/loggeduser';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { environment } from '../../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class Loginservice {
  DecodeUser(Token: any) {
    localStorage.setItem('HelperPlanJWTToken', Token);
    let DecodedUser:any = jwtDecode(
      localStorage.getItem('HelperPlanJWTToken')!
    );
    this.LoggedUser.next(DecodedUser)
    this.IsLogged=true
    this.router.navigateByUrl('/myaccount');
}
   
  constructor(public http : HttpClient,private router:Router) {}
  LoggedUser=new BehaviorSubject(null);
  IsLogged:boolean=false;
  LogUser(LoggedUser:Loggeduser) :Observable<any> {
    return this.http.post(`${environment.baseUrl}/Account/Login`, LoggedUser);
  }
  LogOutUser()  {
    localStorage.removeItem('HelperPlanJWTToken');
    this.IsLogged = false;
    this.LoggedUser.next(null);
    this.router.navigate(['/Login']);
  }

}
