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

  createSubscription(subscriptionData: ISubscribtionDto): Observable<string> {
    return this.httpclient.post<string>(
      `${environment.baseUrl}/api/Subscribtions/Create`,
      subscriptionData
    );
  }
}
