/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-progress-photos',
  templateUrl: './progress-photos.page.html',
  styleUrls: ['./progress-photos.page.scss'],
})
export class ProgressPhotosPage implements OnInit {
  slideOpts2 = {
    slidesPerView: 3.1,
  };

  constructor(
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onClick(){

  }

  onBack (){
    this.navctr.back();
  }

}
