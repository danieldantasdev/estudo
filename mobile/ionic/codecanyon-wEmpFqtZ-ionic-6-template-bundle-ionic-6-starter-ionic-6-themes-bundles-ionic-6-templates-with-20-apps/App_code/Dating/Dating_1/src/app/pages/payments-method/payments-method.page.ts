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
  selector: 'app-payments-method',
  templateUrl: './payments-method.page.html',
  styleUrls: ['./payments-method.page.scss'],
})
export class PaymentsMethodPage implements OnInit {

  constructor(
    private NavCtrl: NavController,
    private router: Router
  ) { }

  slideOpts = {
    slidesPerView: 1.1,
  };

  ngOnInit() {
  }
  onBack() {
    this.NavCtrl.back();
  }
  onChange() {

  }
  onCheckout() {
    this.router.navigate(['reference-code']);
  }

}
