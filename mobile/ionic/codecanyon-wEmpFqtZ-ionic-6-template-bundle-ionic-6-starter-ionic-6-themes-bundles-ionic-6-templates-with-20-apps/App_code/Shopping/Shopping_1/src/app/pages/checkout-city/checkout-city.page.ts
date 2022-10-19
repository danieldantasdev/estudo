/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-checkout-city',
  templateUrl: './checkout-city.page.html',
  styleUrls: ['./checkout-city.page.scss'],
})
export class CheckoutCityPage implements OnInit {

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onSearch() {

  }
  onCamera() {

  }

}
