import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICandidates } from '../models/icandidates';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private httpClient: HttpClient) { }

  getAllEmployers(): Observable<ICandidates[]> {
    return this.httpClient.get<ICandidates[]>(`${environment.baseUrl}/ICandidates/GetAll`)
  }

  createEmployer(Candidate: ICandidates): Observable<ICandidates> {
    return this.httpClient.post<ICandidates>(`${environment.baseUrl}/Candidate/Insert`, Candidate);
  }

  getEmployerById(id: number): Observable<ICandidates> {
    return this.httpClient.get<ICandidates>(`${environment.baseUrl}/Candidate/GetById/${id}`);
  }

  updateEmployer(Candidate: ICandidates, id: number): Observable<ICandidates> {
    return this.httpClient.put<ICandidates>(`${environment.baseUrl}/Candidate/Update/${Candidate.id}`, Candidate);
  }

  deleteEmployer(id: number): Observable<void> {
    return this.httpClient.delete<void>(`${environment.baseUrl}/Candidate/Delete/${id}`);
  }
}
