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
import { UtilService } from 'src/app/services/util.service';
import { EnableLocationPage } from '../enable-location/enable-location.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(
    private modalController : ModalController,
    private router : Router,
    public util: UtilService
  ) { }

  ngOnInit() {
  }

 async goToEnableLocation(){
    const modal = await this.modalController.create({
      component : EnableLocationPage,
      cssClass : 'custom_modal',
      componentProps : { value: 123},
    });

    await modal.present();
  }

  goToFind(){
    this.router.navigate(['find']);
  }

  goToSalonDetail(){
    this.router.navigate(['salon-details']);
  }

  goToNotification(){
    this.router.navigate(['notification']);
  }

  onClick(){

  }

}
