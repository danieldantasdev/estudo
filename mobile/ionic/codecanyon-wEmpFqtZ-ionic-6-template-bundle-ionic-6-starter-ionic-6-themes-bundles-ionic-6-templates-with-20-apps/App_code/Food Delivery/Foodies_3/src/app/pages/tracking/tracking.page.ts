/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { SheetState } from 'ion-bottom-sheet';
import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-tracking',
  templateUrl: './tracking.page.html',
  styleUrls: ['./tracking.page.scss'],
})
export class TrackingPage implements OnInit {

  height;
  rate = 0

  sheetState = SheetState.Docked;
  minHeight = 240;
  dockedHeight = 240;
  topDistance = 120;
  transition = '0.2s ease-out';

  constructor(private plt: Platform, private navCtrl: NavController) {
    this.plt.ready().then(() => {
      console.log(plt.width());
      console.log(plt.height());
      this.height = plt.height();
    });
  }

  ngOnInit() {
  }

  changeRate(val) {
    this.rate = val;
  }

  goBack() {
    this.navCtrl.back();
  }

}
