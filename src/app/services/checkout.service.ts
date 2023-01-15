import { Injectable } from '@angular/core';
import { Cart } from '../model/cart';

@Injectable({
  providedIn: 'root'
})
export class CheckoutService {

  private _checkout!: Cart;

  public get checkout() {
    return this._checkout;
  }

  public set checkout(value: Cart) {
    this._checkout = value;
  }

  cartId!: number;

  constructor() { }
}
