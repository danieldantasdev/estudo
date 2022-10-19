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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-confirm-bill',
  templateUrl: './confirm-bill.page.html',
  styleUrls: ['./confirm-bill.page.scss'],
})
export class ConfirmBillPage implements OnInit {

    constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToAddPaymentMethod() {
        this.router.navigate(['/payment-methods']);
    }

    goToAddresses() {
        this.router.navigate(['/delivery-addresses']);
    }

    goToHome() {
        this.router.navigate(['/tabs']);
    }

}
