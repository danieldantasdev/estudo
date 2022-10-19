/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  searchItem = [
    'Milk Tea', 'Rice Chicken', 'Coffee'
  ];

  foods = [];


  constructor(private modalCtrl: ModalController, private dummy: DummyService) {
    this.foods = this.dummy.foods;
  }

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss();
  }

}
