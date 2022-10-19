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
  selector: 'app-fullbody-workout',
  templateUrl: './fullbody-workout.page.html',
  styleUrls: ['./fullbody-workout.page.scss'],
})
export class FullbodyWorkoutPage implements OnInit {
  slideOpts2 = {
    slidesPerView: 2.3,
  };

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onClick() {
    this.navCtrl.back();
  }

}
