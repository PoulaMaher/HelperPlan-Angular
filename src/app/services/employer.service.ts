import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { IEmployer } from '../models/IEmployer';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployers(): Observable<IEmployer[]> {
    return this.httpClient.get<IEmployer[]>(`${environment.baseUrl}/Employer/GetAll`)
  }

  createEmployer(Employer: IEmployer): Observable<IEmployer> {
    return this.httpClient.post<IEmployer>(`${environment.baseUrl}/Employer/Insert`, Employer);
  }

  getEmployerById(id: number): Observable<IEmployer> {
    return this.httpClient.get<IEmployer>(`${environment.baseUrl}/Employer/GetById/${id}`);
  }
  
  updateEmployer(employer: IEmployer, id: number): Observable<IEmployer> {
    return this.httpClient.put<IEmployer>(`${environment.baseUrl}/Employer/Update/${employer.id}`, employer);
  }

  deleteEmployer(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/Employer/Delete/${id}`);
  }


}
