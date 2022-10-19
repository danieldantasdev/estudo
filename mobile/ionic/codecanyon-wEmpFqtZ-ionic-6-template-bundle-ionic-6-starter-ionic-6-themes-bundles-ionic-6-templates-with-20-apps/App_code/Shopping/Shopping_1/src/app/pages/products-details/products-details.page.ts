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
import { SizePage } from '../size/size.page';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.page.html',
  styleUrls: ['./products-details.page.scss'],
})
export class ProductsDetailsPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController,
    private modalController: ModalController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }
  onShare() {

  }
  onFavorite() {

  }
  onVideo() {
    this.router.navigate(['products-video']);
  }


  async onCart() {
    const modal = await this.modalController.create({
      component: SizePage,
      cssClass: 'make_modal',
      componentProps: { value: 123 }
    });

    await modal.present();

  }

}
