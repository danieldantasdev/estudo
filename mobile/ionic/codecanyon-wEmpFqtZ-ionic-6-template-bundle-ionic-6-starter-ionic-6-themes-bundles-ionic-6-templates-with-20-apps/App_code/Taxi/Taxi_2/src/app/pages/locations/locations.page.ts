import { ModalController, Platform } from '@ionic/angular';
import { PromoCodePage } from './../promo-code/promo-code.page';
import { PaymentMethodPage } from './../payment-method/payment-method.page';
import { FareDetailPage } from './../fare-detail/fare-detail.page';
import { DriverDetailPage } from './../driver-detail/driver-detail.page';
/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.page.html',
  styleUrls: ['./locations.page.scss'],
})
export class LocationsPage implements OnInit {

    carType = [
        {
            img1 : 'car-active.png',
            img2 : 'car-deactive.png',
            name : 'Car'
        },
        {
            img1 : 'budget-active.png',
            img2 : 'budget-deactive.png',
            name : 'Budget'
        },
        {
            img1 : 'tuk-tuk-active.png',
            img2 : 'tuk-tuk-deactive.png',
            name : 'Tuk Tuk'
        },
        {
            img1 : 'city-active.png',
            img2 : 'city-deactive.png',
            name : 'City'
        },
        {
            img1 : 'van-active.png',
            img2 : 'van-deactive.png',
            name : 'van'
        }
    ];
    type = 1;
    height;

    constructor(private plt: Platform, private modalCtrl: ModalController) {
        this.plt.ready().then(() => {
            console.log(this.plt.height());
            this.height = this.plt.height();
        });
    }

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

    async openFareDetail() {
        const modal = await this.modalCtrl.create({
            component: FareDetailPage,
            cssClass: 'fare_modal',
            mode: 'md'
        });
        modal.present();
    }

    async openDriverDetail() {
        const modal = await this.modalCtrl.create({
            component: DriverDetailPage,
            cssClass: 'driver_modal'
        });
        modal.present();
    }

}
