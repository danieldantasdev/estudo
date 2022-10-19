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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-order-tracking',
  templateUrl: './order-tracking.page.html',
  styleUrls: ['./order-tracking.page.scss'],
})
export class OrderTrackingPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  ontrackDetail() {
    this.router.navigate(['track-order']);
  }

  onBackNavigation() {
    this.navCtrl.back();
  }

}
