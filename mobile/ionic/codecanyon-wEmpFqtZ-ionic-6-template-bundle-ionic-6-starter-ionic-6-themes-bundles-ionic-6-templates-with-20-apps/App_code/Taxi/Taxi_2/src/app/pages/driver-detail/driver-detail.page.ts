import { PromoCodePage } from './../promo-code/promo-code.page';
import { PaymentMethodPage } from './../payment-method/payment-method.page';
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

@Component({
  selector: 'app-driver-detail',
  templateUrl: './driver-detail.page.html',
  styleUrls: ['./driver-detail.page.scss'],
})
export class DriverDetailPage implements OnInit {

    constructor(private modalCtrl: ModalController) { }

    ngOnInit() {
    }

    async openPayment() {
        const modal = await this.modalCtrl.create({
            component: PaymentMethodPage,
            cssClass: 'payment_modal',
            mode: 'md'
        });
        modal.present();
    }

    async openPromoCode() {
        const modal = await this.modalCtrl.create({
            component: PromoCodePage,
            cssClass: 'promo_modal',
            mode: 'md'
        });
        modal.present();
    }

}
