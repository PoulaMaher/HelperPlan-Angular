import { Injectable } from '@angular/core';
import { ISubscribtionDto } from '../models/isubscribtion-dto';
import { Observable, Observer } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IPaymentFromUrl } from '../models/ipayment-from-url';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpclient: HttpClient) {}

  createSubscription(subscriptionData: ISubscribtionDto): Observable<IPaymentFromUrl> {
<<<<<<< HEAD
=======
    const api_key = localStorage.getItem("HelperPlanJWTToken");
    const header= new HttpHeaders().set('Authorization', `Bearer ${api_key}`)
>>>>>>> e45a571591bf702b88a34a0726a6aeeb919786d5
    return this.httpclient.post<IPaymentFromUrl>(
      `${environment.baseUrl}/api/Subscribtions/Create`,
      subscriptionData,{headers: header}
    );
  }
  getOrder(order:string|null):Observable<any>{
     return this.httpclient.get<any>(`${environment.baseUrl}/api/Subscribtions/CheckStatus/${order}`)
  }
}
