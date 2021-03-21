import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  @Input() product;
  constructor() {}

  ngOnInit(): void {}

  addProd(product) {
    let storage_prod = JSON.parse(localStorage.getItem(product.id));

    if(storage_prod != null) {
      console.log("product exists");
      product["amount"] = storage_prod["amount"] + 1;
    }
    else {
      console.log("new product");
      product["amount"] = 1;
    }
    localStorage.setItem(product.id.toString(), JSON.stringify(product));
  }
}
