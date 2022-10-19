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
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController
    ) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }
  goToTransfer() {
    this.router.navigate(['transfer']);
  }
  goToHistory() {
    this.router.navigate(['history']);
  }
  goToService() {
    this.router.navigate(['services']);
  }
  goToAddCard() {
    this.router.navigate(['add-card']);
  }


  slideOpts = {
    initialSlide: 2,
    speed: 400,
    slidesPerView: 1.2,
    spaceBetween: 20
  };

}
