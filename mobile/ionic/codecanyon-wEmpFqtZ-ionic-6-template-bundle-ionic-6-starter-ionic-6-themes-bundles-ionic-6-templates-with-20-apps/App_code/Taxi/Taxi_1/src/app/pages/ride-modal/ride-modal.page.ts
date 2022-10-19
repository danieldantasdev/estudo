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
  selector: 'app-ride-modal',
  templateUrl: './ride-modal.page.html',
  styleUrls: ['./ride-modal.page.scss'],
})
export class RideModalPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  onTime(){
    this.modalController.dismiss();
  }

}
