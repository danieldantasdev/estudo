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
  selector: 'app-my-cards',
  templateUrl: './my-cards.page.html',
  styleUrls: ['./my-cards.page.scss'],
})
export class MyCardsPage implements OnInit {

  slideOpts = {
    slidesPerView: 1.2,
  };

  constructor(
    private router : Router,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onCheckout(){
    this.router.navigate(['checkout']);
  }

  onBackPaymentmethods(){
    this.navctr.back();
  }

}
