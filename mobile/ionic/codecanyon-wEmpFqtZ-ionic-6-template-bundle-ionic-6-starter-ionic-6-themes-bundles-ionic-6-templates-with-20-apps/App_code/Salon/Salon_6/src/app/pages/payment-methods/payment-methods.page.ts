/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddPaymentMethodPage } from '../add-payment-method/add-payment-method.page';

@Component({
  selector: 'app-payment-methods',
  templateUrl: './payment-methods.page.html',
  styleUrls: ['./payment-methods.page.scss'],
})
export class PaymentMethodsPage implements OnInit {

  constructor(
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }


  async goToAddPayment(){
    const modal = await this.modalController.create({
      component : AddPaymentMethodPage,
      cssClass : 'custom_bottom_modal',
      componentProps : { value : 123},
    });

    await modal.present();
  }

  onClick(){

  }

}
