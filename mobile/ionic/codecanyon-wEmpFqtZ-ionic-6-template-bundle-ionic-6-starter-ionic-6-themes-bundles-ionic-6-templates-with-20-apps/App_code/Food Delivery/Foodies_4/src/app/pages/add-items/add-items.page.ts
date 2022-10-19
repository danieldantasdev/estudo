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

@Component({
  selector: 'app-add-items',
  templateUrl: './add-items.page.html',
  styleUrls: ['./add-items.page.scss'],
})
export class AddItemsPage implements OnInit {
  current:any ='1';

  slideOpts = {
      slidesPerView: 4.5,
  };

  constructor(
    private router : Router,
    private modalController: ModalController,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onMyCart(){
    this.modalController.dismiss();
    this.router.navigate(['my-cart']);
  }

  onBackFavourite(){
    this.navctr.back();
  }

  onReview(){
    this.modalController.dismiss();
    this.router.navigate(['reviews']);
  }

  onClick() {

  }

}
