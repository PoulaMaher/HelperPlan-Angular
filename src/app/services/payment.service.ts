import { Injectable } from '@angular/core';
import { ISubscribtionDto } from '../models/isubscribtion-dto';
import { Observable, Observer } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.development';
import { IPaymentFromUrl } from '../models/ipayment-from-url';

@Injectable({
  providedIn: 'root',
})
export class PaymentService {
  constructor(private httpclient: HttpClient) {}

  createSubscription(subscriptionData: ISubscribtionDto): Observable<IPaymentFromUrl> {
    debugger
    return this.httpclient.post<IPaymentFromUrl>(
      `${environment.baseUrl}/api/Subscribtions/Create`,
      subscriptionData
    );
  }
}
