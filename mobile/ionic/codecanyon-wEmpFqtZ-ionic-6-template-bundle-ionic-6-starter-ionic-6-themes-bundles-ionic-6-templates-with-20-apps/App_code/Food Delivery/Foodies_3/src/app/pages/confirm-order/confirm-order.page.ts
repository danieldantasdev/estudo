/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { SheetState } from 'ion-bottom-sheet';

@Component({
  selector: 'app-confirm-order',
  templateUrl: './confirm-order.page.html',
  styleUrls: ['./confirm-order.page.scss'],
})
export class ConfirmOrderPage implements OnInit {

    foods = [];
    currentCard = 1;
    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.foods = this.dummy.foods;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
