import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products = [
    {
      id: 1,
      name: 'article 1',
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 25,
	  image: "https://source.unsplash.com/collection/190727/1600x900"
    },
    {
      id: 2,
      name: 'article 2',
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 35,
	  image: "https://source.unsplash.com/collection/190727/1600x900"
    },
    {
      id: 3,
      name: "article 3",
      label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      price: 45,
	  image: "https://source.unsplash.com/collection/190727/1600x900"
    },
	{
		id: 4,
		name: "article 4",
		label: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
		price: 30,
		image: "https://source.unsplash.com/collection/190727/1600x900"
	}
  ];
  constructor() {}

  ngOnInit(): void {}
}
