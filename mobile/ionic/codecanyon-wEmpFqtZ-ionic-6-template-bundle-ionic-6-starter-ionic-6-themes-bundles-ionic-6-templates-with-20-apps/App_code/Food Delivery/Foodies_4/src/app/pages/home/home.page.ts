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
import { ModalController } from '@ionic/angular';
import { FavouritePage } from '../favourite/favourite.page';
import { FilterPage } from '../filter/filter.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    slidesPerView: 1.2
  };

  constructor(
    private router : Router,
    private modalController : ModalController,
  ) { }

  ngOnInit() {
  }

  onFavourite(){
    this.router.navigate(['favourite']);
  }

  // onFilter(){
  //   this.router.navigate(['filter'])
  // }

  async onFilter() {
    const modal = await this.modalController.create({
      component: FilterPage,
      componentProps: { value: 123 },
    });
    await modal.present();
  }

  segmentChanged(eve) {

  }
}
