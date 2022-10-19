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

  constructor(private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  goToBack() {
    this.navCtrl.back();
  }
  goToPayment() {
    this.router.navigate(['payment']);
  }

  openHistory() {
    this.navCtrl.navigateRoot(['tabs/tab3']);
  }

}
