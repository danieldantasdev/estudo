/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { VariationsPage } from './../variations/variations.page';
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-rest-detail',
  templateUrl: './rest-detail.page.html',
  styleUrls: ['./rest-detail.page.scss'],
})
export class RestDetailPage implements OnInit {

  tabID = 'products';
  foods = [];

  constructor(private dummy: DummyService, private navCtrl: NavController, private modalCtrl: ModalController) {
    // this.categories = this.dummy.categories;
    this.foods = this.dummy.foods;
  }

  ngOnInit() {
  }

  changeSegment(eve) {
    console.log(eve);
    this.tabID = eve.detail.value;
  }

  goBack() {
    this.navCtrl.back();
  }

  async openVariations() {
    const modal = await this.modalCtrl.create({
      component: VariationsPage,
      cssClass: 'variations_modal'
    });
    modal.present();
  }

}
