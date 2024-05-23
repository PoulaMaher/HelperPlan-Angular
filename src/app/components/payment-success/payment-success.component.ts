import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { PaymentService } from '../../services/payment.service';

@Component({
  selector: 'app-payment-success',
  standalone: true,
  imports: [RouterLink,RouterOutlet],
  templateUrl: './payment-success.component.html',
  styleUrl: './payment-success.component.css'
})
export class PaymentSuccessComponent implements OnInit {
  message!:string|null;
  constructor(private route:ActivatedRoute,private payment:PaymentService){}
  ngOnInit(): void {
    debugger
    this.route.paramMap.subscribe(params => {
      this.message = params.get('message');
    });
    this.payment.getOrder(this.message).subscribe((order) => {
      console.log(order);
    })
  }

}
