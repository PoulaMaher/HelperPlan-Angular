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
  // get data from API
  getAllPlans(): Observable<IPlan[]> {
    return this.httpclient.get<IPlan[]>(`${environment.baseUrl}/Plan/GetAll`);
  }

  getPlanById(id: number): Observable<IPlan> {
    console.log(id);
    return this.httpclient.get<IPlan>(
      `${environment.baseUrl}/Plan/GetById/${id}`
    );
  }
  deletePlanById(id: number): void {}

  
}
