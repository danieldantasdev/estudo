/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Router } from '@angular/router';
import { SearchPage } from './../search/search.page';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  categories;
  foods;

  constructor(private modalCtrl: ModalController, private router: Router, private dummy: DummyService) {
    this.categories = this.dummy.categories;
    this.foods = this.dummy.foods;
  }

  ngOnInit() {
  }

  async goToSearch() {
    const modal = await this.modalCtrl.create({
      component: SearchPage
    });
    modal.present();
  }

  goToRestDetail() {
    this.router.navigate(['/rest-detail']);
  }

}
