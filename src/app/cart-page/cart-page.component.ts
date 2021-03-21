import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartProds = [];
  prod_sum = 0;

  constructor() {}

  ngOnInit(): void {
    this.cartProds = this.allStorage();
    console.log(this.cartProds);
    this.updateSum();
  }

  updateSum() {
    this.prod_sum = 0;
    this.cartProds.forEach((i) => {
      this.prod_sum += i.price;
    });
  }

  delProd(product) {
    this.cartProds = this.cartProds.filter((p) => {
      return product.id != p.id;
    });

    localStorage.removeItem(product.id);
    this.updateSum();
  }
  allStorage() {
    var values = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      values.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    return values;
  }
}
