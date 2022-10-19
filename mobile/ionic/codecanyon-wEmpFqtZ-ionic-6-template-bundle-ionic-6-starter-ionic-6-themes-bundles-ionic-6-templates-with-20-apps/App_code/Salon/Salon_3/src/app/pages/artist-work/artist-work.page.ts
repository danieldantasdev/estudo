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
  selector: 'app-artist-work',
  templateUrl: './artist-work.page.html',
  styleUrls: ['./artist-work.page.scss'],
})
export class ArtistWorkPage implements OnInit {

  constructor(
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.NavCtrl.back();
  }

}
