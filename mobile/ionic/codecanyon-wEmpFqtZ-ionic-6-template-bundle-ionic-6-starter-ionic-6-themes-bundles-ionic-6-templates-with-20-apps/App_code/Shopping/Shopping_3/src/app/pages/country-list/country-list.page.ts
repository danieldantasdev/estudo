import { CountryService } from './../../services/country.service';
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
  selector: 'app-country-list',
  templateUrl: './country-list.page.html',
  styleUrls: ['./country-list.page.scss'],
})
export class CountryListPage implements OnInit {

    countries = [];
    constructor(private navCtrl: NavController, private con: CountryService) {
        this.countries = this.con.countries;
        console.log(this.countries);
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
