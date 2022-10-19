import { DummyService } from './../../services/dummy.service';
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
  selector: 'app-my-post',
  templateUrl: './my-post.page.html',
  styleUrls: ['./my-post.page.scss'],
})
export class MyPostPage implements OnInit {

    products = [];

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.products = this.dummy.products;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
