import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { coupons } from 'src/assets/coupons';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private _checkout!: Cart;

  public getCheckout() {
    return this._checkout;
  }

  public setCheckout(value: Cart) {
    this._checkout = value;
  }

  cartId!: number;

  constructor() { }

  getCoupons(): Observable<any> {
    return of(coupons);
  }
}
