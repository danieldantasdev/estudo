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
  selector: 'app-filter',
  templateUrl: './filter.page.html',
  styleUrls: ['./filter.page.scss'],
})
export class FilterPage implements OnInit {

    activeCat = 'Food';
    foodGroup = [
        'Dairy', 'Pizza', 'Breakfast', 'Soups', 'Salads', 'Burger', 'Chicken', 'Meat'
    ];
    activeFood = 'Burger';
    rate = 3;
    price = '$$';

    constructor(
      private navctr : NavController,
      private router : Router,
      private modalController : ModalController,
    ) { }

    ngOnInit() {
    }

    onBackNavigation(){
      this.modalController.dismiss();
    }

    onNavigation(){
      this.modalController.dismiss();
      this.router.navigate(['tabs/tab2']);
    }

    onClick() {

    }

}
