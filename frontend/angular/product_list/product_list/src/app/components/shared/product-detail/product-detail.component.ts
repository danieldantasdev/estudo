import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../../../model/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }

  product: Product | undefined

  ngOnInit(): void {
      // First get the product id from the current route.
      const routeParams = this.route.snapshot.paramMap
      const productIdFromRoute = Number(routeParams.get('productId'))

      // Find the product that correspond with the id provided in route.
    this.product = products.find((product) => product.id === productIdFromRoute)
  }
}
