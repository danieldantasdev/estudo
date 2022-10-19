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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-profile-timeline',
  templateUrl: './profile-timeline.page.html',
  styleUrls: ['./profile-timeline.page.scss'],
})
export class ProfileTimelinePage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) { }

  slideOpts2 = {
    slidesPerView: 2.5,
  };

  ngOnInit() {
  }
  onBack() {
    this.NavCtrl.back();
  }
  onNotification() {
    this.router.navigate(['notification']);
  }
  onClick() {

  }

}
