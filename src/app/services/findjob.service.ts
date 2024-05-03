import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJob } from '../models/IJob';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
@Injectable({
  providedIn: 'root',
})
export class FindjobService {
  private apiUrl = '';
  constructor(private http: HttpClient) {}
  // getAllJobs(): Observable<IJob[]> {
  //   return this.http.get<IJob[]>(`${environment.baseUrl}/Job/GetAll`)
  // }
    getAllJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${environment.baseUrl}/Job/GetAll`)
  }
  getFilteredJobs(filters: any): Observable<IJob[]> {
    const params = this.generateParams(filters);
    return this.http.get<IJob[]>(`${environment.baseUrl}/jobs`, { params });
  }

  private generateParams(filters: any): { [param: string]: string } {
    let params: { [param: string]: string } = {};
    if (filters.title) {
      //params.title = filters.title;
    }
    // Add more filters as needed

    return params;
  }
}
