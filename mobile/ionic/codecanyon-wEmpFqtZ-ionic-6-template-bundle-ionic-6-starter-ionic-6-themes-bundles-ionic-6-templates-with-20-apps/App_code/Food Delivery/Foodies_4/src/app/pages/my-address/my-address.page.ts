/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { NavController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-address',
  templateUrl: './my-address.page.html',
  styleUrls: ['./my-address.page.scss'],
})
export class MyAddressPage implements OnInit {

  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  onBackProfile() {
    this.navCtrl.back();
  }

  onNavigation() {

  }

}
