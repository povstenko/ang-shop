import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css'],
})
export class CartPageComponent implements OnInit {
  cartProds = [];

  constructor() {}

  ngOnInit(): void {
    this.cartProds = this.allStorage();
    console.log(this.cartProds);
  }
  delProd(product) {
    this.cartProds = this.cartProds.filter((p) => {
      return product.id != p.id
    })

    localStorage.removeItem(product.id);
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
