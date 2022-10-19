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

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 1.2,
    spaceBetween: 20,
  };

  onPromotion() {
    this.router.navigate(['promotions']);
  }
  onPayments() {
    this.router.navigate(['cash-in']);
  }

}
