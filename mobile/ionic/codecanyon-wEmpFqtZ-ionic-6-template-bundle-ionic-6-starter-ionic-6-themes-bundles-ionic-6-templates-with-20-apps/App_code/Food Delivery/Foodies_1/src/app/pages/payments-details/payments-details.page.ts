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
import { AddCardPage } from '../add-card/add-card.page';

@Component({
  selector: 'app-payments-details',
  templateUrl: './payments-details.page.html',
  styleUrls: ['./payments-details.page.scss'],
})
export class PaymentsDetailsPage implements OnInit {

  constructor(
    private ModalController: ModalController,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  async onCard() {
    const modal = await this.ModalController.create({
      component: AddCardPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();

  }

  onBack() {
    this.NavCtrl.back();
  }
  onContinue() {

  }

}
