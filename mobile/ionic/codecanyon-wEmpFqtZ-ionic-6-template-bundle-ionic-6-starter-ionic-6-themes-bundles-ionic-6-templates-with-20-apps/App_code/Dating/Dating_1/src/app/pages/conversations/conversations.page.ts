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
  selector: 'app-conversations',
  templateUrl: './conversations.page.html',
  styleUrls: ['./conversations.page.scss'],
})
export class ConversationsPage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  slideOpts2 = {
    slidesPerView: 3.5,
  };

  onBack() {
    this.NavCtrl.back();
  }
  onMsg() {
    this.router.navigate(['chat3']);
  }
}
