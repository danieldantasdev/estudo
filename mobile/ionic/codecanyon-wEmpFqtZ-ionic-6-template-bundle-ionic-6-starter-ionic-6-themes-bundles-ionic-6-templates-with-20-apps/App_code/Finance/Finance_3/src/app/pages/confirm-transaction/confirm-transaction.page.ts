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
  selector: 'app-confirm-transaction',
  templateUrl: './confirm-transaction.page.html',
  styleUrls: ['./confirm-transaction.page.scss'],
})
export class ConfirmTransactionPage implements OnInit {

  num1: any = '';
  num2: any = '';
  num3: any = '';
  num4: any = '';
  constructor(
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onConfirm() {
    this.router.navigate(['payment-counter']);
  }

  onPress(num) {
    console.log(num);
    console.log(this.num1, this.num2, this.num3, this.num4);
    if (this.num1 == '' || this.num1 == null) {
      this.num1 = num;
      return false;
    }
    if (this.num2 == '' || this.num2 == null) {
      this.num2 = num;
      return false;
    }
    if (this.num3 == '' || this.num3 == null) {
      this.num3 = num;
      return false;
    }
    if (this.num4 == '' || this.num4 == null) {
      this.num4 = num;
      return false;
    }
    const finalStrin = this.num1 + '' + this.num2 + '' + this.num3 + '' + this.num4;
    console.log(finalStrin);
  }

  onDelete() {
    if (this.num4 != null && this.num4 != '') {
      this.num4 = '';
      return false;
    }

    if (this.num3 != null && this.num3 != '') {
      this.num3 = '';
      return false;
    }

    if (this.num2 != null && this.num2 != '') {
      this.num2 = '';
      return false;
    }

    if (this.num1 != null && this.num1 != '') {
      this.num1 = '';
      return false;
    }
  }
}
