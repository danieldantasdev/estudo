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
import { AlertController, ModalController, NavController } from '@ionic/angular';
import { ConfirmOrderPage } from '../confirm-order/confirm-order.page';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

  constructor(
    private modalController : ModalController,
    private navctr : NavController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  async onConfirm() {
    const modal = await this.modalController.create({
    component: ConfirmOrderPage,
    cssClass : 'custom_modal',
    componentProps: { value: 123 },
    });

    await modal.present();

  }

  onBackMyCart(){
    this.navctr.back();
  }

  onPaymentMethod(){
    this.router.navigate(['payment-method']);
  }

  onAdditem() {

  }

}
