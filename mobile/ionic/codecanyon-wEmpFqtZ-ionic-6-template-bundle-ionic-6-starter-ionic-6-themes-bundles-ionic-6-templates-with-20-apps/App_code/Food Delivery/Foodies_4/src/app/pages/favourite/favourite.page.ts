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
import { AddItemsPage } from '../add-items/add-items.page';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

  constructor(
    private modalController : ModalController,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  async onAdditem() {
    const modal = await this.modalController.create({
    component: AddItemsPage,
    cssClass : 'item_modal',
    componentProps: { value: 123 },
    });

    await modal.present();

  }

  onBackHome(){
    this.navctr.back();
  }

  onClick() {

  }

  segmentChanged(eve) {

  }

}
