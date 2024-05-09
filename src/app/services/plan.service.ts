import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { IPlan } from '../models/IPlan';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlanService {
  private testStaticPlans: IPlan[] = [
    {
      ID: 1,
      Name: 'Weekly',
      Price: 20,
      Type: 'Week',
    },
    {
      ID: 2,
      Name: 'Monthly',
      Price: 50,
      Type: 'Monthly',
    },
    {
      ID: 3,
      Name: '2 Month',
      Price: 90,
      Type: '2 Month',
    },
  ];
  private currentPlan!: IPlan;
  constructor(private httpclient: HttpClient) {}
  // get data from API
  // getAllPlans(): Observable<IPlan[]> {
  //   return this.httpclient.get<IPlan[]>(`${environment.baseUrl}/Plan/GetAll`);
  // }

  // getPlanById(id: number): Observable<IPlan> {
  //   return this.httpclient.get<IPlan>(
  //     `${environment.baseUrl}/Plan/GetById/${id}`
  //   );
  // }

  // data for test
  getAllPlans(): IPlan[] {
    //Observable<IPlan[]> {
    //return this.httpclient.get<IPlan[]>(`${environment.baseUrl}/Plan/GetAll`);
    return this.testStaticPlans;
  }

  getPlanById(id: number): IPlan {
    ///for testtttttttttttttt
    return (this.currentPlan = this.testStaticPlans.find(
      (plan) => plan.ID == id
    ) || { ID: 1, Name: 'Ay 7aga', Price: 20, Type: 'Ay 7aga' });
  }
}
