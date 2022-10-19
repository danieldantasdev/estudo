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

@Component({
  selector: 'app-enable-location',
  templateUrl: './enable-location.page.html',
  styleUrls: ['./enable-location.page.scss'],
})
export class EnableLocationPage implements OnInit {

  constructor(
    private router : Router,
    private modalController : ModalController
  ) { }

  ngOnInit() {
  }

  goBackHome(){
    this.modalController.dismiss();
    this.router.navigate(['tabs/tab1']);
  }

}
