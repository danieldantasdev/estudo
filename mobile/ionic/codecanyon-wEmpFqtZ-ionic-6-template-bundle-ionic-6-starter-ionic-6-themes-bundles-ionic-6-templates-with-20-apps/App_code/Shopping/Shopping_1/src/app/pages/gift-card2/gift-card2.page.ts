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
  selector: 'app-gift-card2',
  templateUrl: './gift-card2.page.html',
  styleUrls: ['./gift-card2.page.scss'],
})
export class GiftCard2Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onCard() {
    this.router.navigate(['gift-card']);
  }
  onBuy() {
    this.router.navigate(['gift-card3']);
  }

}
