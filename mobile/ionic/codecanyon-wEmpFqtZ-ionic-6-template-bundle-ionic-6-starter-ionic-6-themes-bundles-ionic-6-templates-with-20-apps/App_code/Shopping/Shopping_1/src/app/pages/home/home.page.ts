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
import { ModalController, NavController } from '@ionic/angular';
import { FilterPage } from '../filter/filter.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  current = 1;

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  slideOpts2 = {
    slidesPerView: 2,
  };

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onCart() {

  }
  onClose() {

  }
  onAll() {

  }
  onBag() {

  }
  onProduct() {
    this.router.navigate(['products-details']);
  }

  async onFilter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
