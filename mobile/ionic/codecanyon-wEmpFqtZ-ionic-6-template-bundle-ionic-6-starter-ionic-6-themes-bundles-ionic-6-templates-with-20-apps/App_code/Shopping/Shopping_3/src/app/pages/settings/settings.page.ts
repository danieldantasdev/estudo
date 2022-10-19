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
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

    constructor(private navCtrl: NavController, private router: Router) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    goToCountry() {
        this.router.navigate(['/country-list']);
    }

    goToCurrency() {
        this.router.navigate(['/currency']);
    }

    goToLanguage() {
        this.router.navigate(['/languages']);
    }

}
