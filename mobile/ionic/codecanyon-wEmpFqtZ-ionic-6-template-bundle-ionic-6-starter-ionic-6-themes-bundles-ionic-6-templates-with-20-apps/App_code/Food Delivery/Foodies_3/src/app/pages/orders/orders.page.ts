/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.page.html',
  styleUrls: ['./orders.page.scss'],
})
export class OrdersPage implements OnInit {

  tabID = 'ongoing';
  rest;

  constructor(private dummy: DummyService) {
    this.rest = this.dummy.rest;
  }

  ngOnInit() {
  }

  segmentChanged(event) {
    console.log(event.detail.value);
    this.tabID = event.detail.value;
  }

}
