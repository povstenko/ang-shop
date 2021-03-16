import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product;
  constructor() { }

  ngOnInit(): void {
  }

  addProd(product) {
    // console.log(product);
    localStorage.setItem(product.id.toString(), JSON.stringify(product));
    
  }

}
