/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-orders',
  templateUrl: './my-orders.page.html',
  styleUrls: ['./my-orders.page.scss'],
})
export class MyOrdersPage implements OnInit {
  current: any = '1';

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBackNavigation() {
    this.router.navigate(['order-tracking']);
  }

  onClick() {
    this.router.navigate(['track-order']);
  }

}
