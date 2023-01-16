import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Cart } from 'src/app/model/cart';
import { Coupon } from 'src/app/model/coupon';
import { CheckoutService } from 'src/app/services/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  data!: Cart;
  coupon: string = '';
  total: number = 0;
  discount: number = 0;
  totalWithDiscount: number = 0;
  coupons!: Coupon[];
  applied: boolean = false;
  
  constructor(
    private checkoutService: CheckoutService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.data = this.checkoutService.getCheckout();
    this.total = this.data ? this.data.total : 0;
    this.checkoutService.getCoupons().subscribe((res) => {
        this.coupons = res.data;
    });
    this.totalWithDiscount = this.total;
  }

  applyCoupom(): void {
    if(this.applied) return;
    let coupon = this.coupons.find(cp => cp.name == this.coupon);
    this.discount = coupon ? this.total*coupon.offPercent/100 : 0;
    this.totalWithDiscount = this.total - this.discount;
    this.applied = true;
  }

  finalize(): void {
    this.snackBar.open("Compra realizada com sucesso");
  }

}