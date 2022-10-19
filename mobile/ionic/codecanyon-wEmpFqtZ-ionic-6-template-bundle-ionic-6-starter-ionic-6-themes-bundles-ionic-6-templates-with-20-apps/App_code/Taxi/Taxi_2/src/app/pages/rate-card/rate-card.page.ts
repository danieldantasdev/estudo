/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-rate-card',
  templateUrl: './rate-card.page.html',
  styleUrls: ['./rate-card.page.scss'],
})
export class RateCardPage implements OnInit {

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

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
