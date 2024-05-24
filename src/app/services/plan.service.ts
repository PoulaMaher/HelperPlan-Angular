import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IPlan } from '../models/IPlan';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private currentPlan!: IPlan;
  constructor(private httpclient: HttpClient) {}

  getAllPlans(): Observable<IPlan[]> {
    return this.httpclient.get<IPlan[]>(`${environment.baseUrl}/Plan/GetAll`);
  }
  addPlan(plan: IPlan): Observable<IPlan> {
    return this.httpclient.post<IPlan>(
      `${environment.baseUrl}/Plan/Insert`,
      plan
    );
  }
  UpdatePlan(plan: IPlan, id: number): Observable<IPlan> {
    return this.httpclient.put<IPlan>(
      `${environment.baseUrl}/Plan/Update/${id}`,
      plan
    );
  }
  getPlanById(id: number): Observable<IPlan> {
    console.log(id);
    return this.httpclient.get<IPlan>(
      `${environment.baseUrl}/Plan/GetById/${id}`
    );
  }
  deletePlanById(id: number): Observable<IPlan> {
    return this.httpclient.delete<IPlan>(
      `${environment.baseUrl}/Plan/Delete/${id}`
    );
  }
}
