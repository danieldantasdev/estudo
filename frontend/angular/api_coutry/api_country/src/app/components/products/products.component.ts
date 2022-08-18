import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  products: any = [
    {
      name: 'Product 1',
      price: '100',
    },
    {
      name: 'Product 2',
      price: '200',
    },
    {
      name: 'Product 3',
      price: '200',
    },
  ];

  product = this.products;
}
