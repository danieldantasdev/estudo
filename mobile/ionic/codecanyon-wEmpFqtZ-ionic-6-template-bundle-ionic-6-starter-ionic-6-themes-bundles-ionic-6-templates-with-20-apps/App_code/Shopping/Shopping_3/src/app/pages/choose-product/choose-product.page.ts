import { DummyService } from './../../services/dummy.service';
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-choose-product',
  templateUrl: './choose-product.page.html',
  styleUrls: ['./choose-product.page.scss'],
})
export class ChooseProductPage implements OnInit {

    products = [];

    constructor(private dummy: DummyService) {
        this.products = this.dummy.products;
    }

    ngOnInit() {
    }

    segmentChanged(event) {

    }

}
