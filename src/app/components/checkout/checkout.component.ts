import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  coupon: string = '';
  
  constructor() { }

  ngOnInit(): void {
  }

  applyCoupom(): void {
    console.log(this.coupon)
  }

  finalize(): void {
    
  }

}
