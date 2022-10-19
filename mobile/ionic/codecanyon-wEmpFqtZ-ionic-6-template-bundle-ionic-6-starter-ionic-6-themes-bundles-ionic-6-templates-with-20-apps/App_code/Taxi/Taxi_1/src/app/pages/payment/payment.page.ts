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
  selector: 'app-payment',
  templateUrl: './payment.page.html',
  styleUrls: ['./payment.page.scss'],
})
export class PaymentPage implements OnInit {
  selectedSize: number;

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  changeSize(size: number) {
    this.selectedSize = size;
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToHome() {
    this.router.navigate(['tabs/tab1'])
  }


}
