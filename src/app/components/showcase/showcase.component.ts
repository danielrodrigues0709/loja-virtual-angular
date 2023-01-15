import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/model/cart';
import { Product } from 'src/app/model/product';
import { CheckoutService } from 'src/app/services/checkout.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  products!: any[];
  productsInCart: any[] = [];

  constructor(
    private productsService: ProductsService,
    private checkoutService: CheckoutService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.products.forEach((prod: any) => {
        prod.qtd = 0
      })
    });
  }

  addItem(product: Product): void {
    let prod: Product = this.products.find(p => p.id == product.id);
    if(this.productsInCart.includes(prod)) {
      let item = this.productsInCart.find(p => p.id == product.id);
      item.qtd++;
    }
    else {
      this.productsInCart.push(prod);
      let item = this.productsInCart.find(p => p.id == product.id);
      item.qtd++;
    }
  }

  removeItem(product: Product): void {
    let prod: Product = this.products.find(p => p.id == product.id);
    let item = this.productsInCart.find(p => p.id == product.id);
    if(prod.qtd == 0) {return;}
    else if(prod.qtd > 1) {
      item.qtd--;
    }
    else {
      let index = this.productsInCart.indexOf(prod);
      this.productsInCart.slice(index);
      item.qtd = 0;
    }
  }

  goToCheckout(): void {
    let total: number = 0;
    this.productsInCart.forEach(prod => {
      total = total + (prod.price * prod.qtd);
    })
    let cart: Cart = {
      total: total,
      products: this.productsInCart

    }
    this.checkoutService.setCheckout(cart);
    this.router.navigate(['/checkout']);
  }

}