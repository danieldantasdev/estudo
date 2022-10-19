/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-driver-modal',
  templateUrl: './driver-modal.page.html',
  styleUrls: ['./driver-modal.page.scss'],
})
export class DriverModalPage implements OnInit {
  selectedSize: number;

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }
  changeSize(size: number) {
    this.selectedSize = size;
  }

  onPay(){
    this.modalController.dismiss();
  }

}
