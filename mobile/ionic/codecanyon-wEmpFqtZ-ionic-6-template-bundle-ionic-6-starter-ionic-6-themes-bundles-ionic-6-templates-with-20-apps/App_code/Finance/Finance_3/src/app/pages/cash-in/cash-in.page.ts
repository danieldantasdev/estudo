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
  selector: 'app-cash-in',
  templateUrl: './cash-in.page.html',
  styleUrls: ['./cash-in.page.scss'],
})
export class CashInPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onBank() {
    this.router.navigate(['payment']);
  }
  onSend() {
    this.router.navigate(['confirm-transaction']);
  }
  onCode() {
    this.router.navigate(['code-scan']);
  }
  onPayment() {
    this.router.navigate(['successful-payment']);
  }

}
