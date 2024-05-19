import { Injectable } from '@angular/core';
import { IAdmin } from '../models/IAdmin';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private httpClient: HttpClient) { }

  GetAllAdmins(): Observable<IAdmin[]> {
    return this.httpClient.get<IAdmin[]>(`${environment.baseUrl}/Account/GetAdmins`)
  }
  UpdateAdmin(id:number,admin:IAdmin): Observable<IAdmin> {
    return this.httpClient.put<IAdmin>(`${environment.baseUrl}/Account/UpdateAdmin/${id}`,admin)
  }
  deleteAdmin(id:number): Observable<IAdmin> {
    return this.httpClient.delete<IAdmin>(`${environment.baseUrl}/Account/DeleteAdmin/${id}`)
  }
  AddAdmin(admin:IAdmin): Observable<IAdmin> {
    return this.httpClient.post<IAdmin>(`${environment.baseUrl}/Account/AddAdmin`,admin)
  }
  getAdmin(id:number): Observable<IAdmin> {
    return this.httpClient.get<IAdmin>(`${environment.baseUrl}/Account/getAdmin/${id}`)
  }
}
