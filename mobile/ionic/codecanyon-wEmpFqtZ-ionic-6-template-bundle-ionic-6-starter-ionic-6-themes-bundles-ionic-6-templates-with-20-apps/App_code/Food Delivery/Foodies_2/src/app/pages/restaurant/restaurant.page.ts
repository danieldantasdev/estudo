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
import { CartPage } from '../cart/cart.page';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.page.html',
  styleUrls: ['./restaurant.page.scss'],
})
export class RestaurantPage implements OnInit {
  seg_id = 1;
  constructor(
    private router: Router,
    private modalController: ModalController,
    private navCtrl: NavController) { }

  ngOnInit() {
  }
  segmentChange(val) {
    this.seg_id = val;
  }

  goToHome() {
    this.navCtrl.back();
  }

  goToItem() {
    this.router.navigate(['/item-details']);
  }
  goToConfirm() {
    this.router.navigate(['/confirm-order']);
  }

  async cart() {
    const modal = await this.modalController.create({
      component: CartPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data)

  }

}
