import { DummyService } from './../../services/dummy.service';
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
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.page.html',
  styleUrls: ['./checkout.page.scss'],
})
export class CheckoutPage implements OnInit {

    products = [];
    constructor(private modalCtrl: ModalController, private router: Router, private dummy: DummyService) {
        this.products = this.dummy.products;
    }

    ngOnInit() {
    }

    close() {
        this.modalCtrl.dismiss();
    }

    goToConfirmBill() {
        this.modalCtrl.dismiss();
        this.router.navigate(['/confirm-bill']);
    }

}
