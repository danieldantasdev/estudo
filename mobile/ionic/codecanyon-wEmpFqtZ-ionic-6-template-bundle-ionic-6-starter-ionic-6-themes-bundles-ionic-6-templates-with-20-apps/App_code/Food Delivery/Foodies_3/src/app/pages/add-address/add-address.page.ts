/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-add-address',
  templateUrl: './add-address.page.html',
  styleUrls: ['./add-address.page.scss'],
})
export class AddAddressPage implements OnInit {

    height;
    constructor(private navCtrl:NavController, private plt: Platform) {
        this.plt.ready().then((data) => {
            this.height = this.plt.height();
            console.log(this.height);
        });
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
