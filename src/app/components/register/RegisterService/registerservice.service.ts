import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegister } from '../UserRegister/user-register';
import { environment } from '../../../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class Registerservice {
  
  AddUser(Role:string,RegisteredUser:UserRegister): Observable<any> {
    return this.Http.post(`${environment.baseUrl}/api/Account/Register?Role=${Role}`, RegisteredUser);
  }
  constructor(private Http: HttpClient) {}
  }

