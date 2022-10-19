import { DummyService } from './../../services/dummy.service';
import { CheckoutPage } from './../checkout/checkout.page';
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
import { Router } from '@angular/router';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.page.html',
  styleUrls: ['./favourites.page.scss'],
})
export class FavouritesPage implements OnInit {

    products = [];

    constructor(private modalCtrl: ModalController, private dummy: DummyService, private router: Router) {
        this.products = this.dummy.products;
    }

    ngOnInit() {
    }

    async openCheckout() {
        const modal = await this.modalCtrl.create({
            component: CheckoutPage,
            showBackdrop: true,
        });
        await modal.present();
    }

    goToProductDetail() {
        this.router.navigate(['/product-detail']);
    }

}
