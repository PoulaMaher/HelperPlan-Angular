import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IJob } from '../models/IJob';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { JobClass } from '../components/post-job/JobClass/job-class';
import { Job } from '../components/job-page/JobClass/job';
@Injectable({
  providedIn: 'root',
})
export class FindjobService {
  private apiUrl = '';
  constructor(private http: HttpClient) {}
<<<<<<< HEAD
    getAllJobs(): Observable<Job[]> {
    return this.http.get<Job[]>(`${environment.baseUrl}Job/GetFilteredJobs`)
=======
    getAllJobs(): Observable<IJob[]> {
    return this.http.get<IJob[]>(`${environment.baseUrl}/Job/GetAll`)
>>>>>>> e45a571591bf702b88a34a0726a6aeeb919786d5
  }
  getFilteredJobs(filters: any): Observable<Job[]> {
    const params = this.generateParams(filters);
<<<<<<< HEAD
    return this.http.get<Job[]>(`${environment.baseUrl}/Job/GetFilteredJobs`, { params });
=======
    return this.http.get<IJob[]>(`${environment.baseUrl}/jobs`, { params });
>>>>>>> e45a571591bf702b88a34a0726a6aeeb919786d5
  }

  private generateParams(filters: any): { [param: string]: string } {
    let params: { [param: string]: string } = {};
    if (filters.title) {
    }
    return params;
  }
}
