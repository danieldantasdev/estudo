/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';
import { PricePage } from '../price/price.page';

@Component({
  selector: 'app-refine',
  templateUrl: './refine.page.html',
  styleUrls: ['./refine.page.scss'],
})
export class RefinePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onApply() {
    this.navCtrl.back();
  }

  async onPrice() {
    const modal = await this.modalController.create({
      component: PricePage,
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
