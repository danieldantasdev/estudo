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

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.page.html',
  styleUrls: ['./favourite.page.scss'],
})
export class FavouritePage implements OnInit {

    tabID = 'ongoing';
    foods;

    constructor(private dummy: DummyService) {
        this.foods = this.dummy.foods;
    }

    ngOnInit() {
    }

    segmentChanged(event) {
        console.log(event.detail.value);
        this.tabID = event.detail.value;
    }

}
