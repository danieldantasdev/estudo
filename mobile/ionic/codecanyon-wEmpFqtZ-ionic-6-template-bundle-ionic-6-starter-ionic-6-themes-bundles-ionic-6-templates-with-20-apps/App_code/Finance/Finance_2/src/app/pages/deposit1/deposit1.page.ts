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
  selector: 'app-deposit1',
  templateUrl: './deposit1.page.html',
  styleUrls: ['./deposit1.page.scss'],
})
export class Deposit1Page implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router) { }

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToNext() {
    this.router.navigate(['deposit2'])
  }
}
