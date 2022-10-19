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
import { AddCardPage } from '../add-card/add-card.page';

@Component({
  selector: 'app-add-payment-method',
  templateUrl: './add-payment-method.page.html',
  styleUrls: ['./add-payment-method.page.scss'],
})
export class AddPaymentMethodPage implements OnInit {

  constructor(
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  async goToAddCard(){
    const modal = await this.modalController.create({
      component : AddCardPage,
      cssClass : 'custom_modal_bottom',
      componentProps : { value : 123},
    });

    await modal.present();
  }

  onClick(){
    
  }

}
