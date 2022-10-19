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
import { ModalController, NavController } from '@ionic/angular';
import { DriverModalPage } from '../driver-modal/driver-modal.page';

@Component({
  selector: 'app-ride-summary',
  templateUrl: './ride-summary.page.html',
  styleUrls: ['./ride-summary.page.scss'],
})
export class RideSummaryPage implements OnInit {


  constructor(
    private modalController: ModalController,
    private router: Router,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async Driver() {
    const modal = await this.modalController.create({
      component: DriverModalPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();
    const data = await modal.onDidDismiss();
    console.log(data)
  }

  goToBack() {
    this.navCtrl.back();

  }
  goToPay() {
    this.router.navigate(['payment']);
  }

}
