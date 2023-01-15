import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { products } from 'src/assets/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  
  getProducts(): Observable<any> {
    return of(products);
  }
}
