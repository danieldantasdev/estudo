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
  selector: 'app-variations',
  templateUrl: './variations.page.html',
  styleUrls: ['./variations.page.scss'],
})
export class VariationsPage implements OnInit {

  sizes = [
    {
      size: 'S',
      qty: '500 ml',
      price: '1'
    },
    {
      size: 'M',
      qty: '750 ml',
      price: '1.5'
    },
    {
      size: 'L',
      qty: '1100 ml',
      price: '2'
    },
  ];
  constructor() { }

  ngOnInit() {
  }

}
