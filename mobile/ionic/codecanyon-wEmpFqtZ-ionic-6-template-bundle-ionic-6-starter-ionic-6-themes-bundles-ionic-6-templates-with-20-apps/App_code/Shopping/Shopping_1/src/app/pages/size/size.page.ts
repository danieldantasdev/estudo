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

@Component({
  selector: 'app-size',
  templateUrl: './size.page.html',
  styleUrls: ['./size.page.scss'],
})
export class SizePage implements OnInit {

  constructor(
    private modalController: ModalController,
    private router: Router,
    private util: UtilService
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.modalController.dismiss();
  }
  onRemove() {

  }
  onAdd() {

  }
  onCart() {
    this.util.success_msg('Your Product is Add To Cart');
    this.modalController.dismiss();
  }
  onProduct() {

  }

}
