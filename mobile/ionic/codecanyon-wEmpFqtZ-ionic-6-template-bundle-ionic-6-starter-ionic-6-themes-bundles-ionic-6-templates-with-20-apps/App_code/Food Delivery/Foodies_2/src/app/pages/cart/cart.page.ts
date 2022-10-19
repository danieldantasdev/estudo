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

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController) { }

  ngOnInit() {
  }
  Back() {
    this.modalController.dismiss();
  }
  goToConfirm() {
    this.modalController.dismiss();
    this.router.navigate(['/confirm-order']);
  }
  goToItem() {
    this.modalController.dismiss();
    this.router.navigate(['/item-details']);
  }
  goToRestaurant() {
    this.modalController.dismiss();
  }


}
