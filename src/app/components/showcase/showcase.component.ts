import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/model/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  products!: Product[];

  constructor(private productsService: ProductsService, private router: Router) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe((res) => {
      this.products = res.data;
      this.products.forEach((prod: any) => {
        prod.qtd = 0
      })
    });
  }

  goToCheckout(): void {
    this.router.navigate(['/checkout']);
  }

}
