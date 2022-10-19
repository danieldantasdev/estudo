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
  selector: 'app-transfer',
  templateUrl: './transfer.page.html',
  styleUrls: ['./transfer.page.scss'],
})
export class TransferPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToConfirm() {
    this.router.navigate(['confirmation']);
  }

  slideOpts = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 20
  };

}
