import { AddCardPage } from './../add-card/add-card.page';
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.page.html',
  styleUrls: ['./payment-method.page.scss'],
})
export class PaymentMethodPage implements OnInit {

    tabID;
    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();;
    }

    async openAddCard() {
        const modal = await this.modalCtrl.create({
            component: AddCardPage,
        });
        modal.present();
    }

}
