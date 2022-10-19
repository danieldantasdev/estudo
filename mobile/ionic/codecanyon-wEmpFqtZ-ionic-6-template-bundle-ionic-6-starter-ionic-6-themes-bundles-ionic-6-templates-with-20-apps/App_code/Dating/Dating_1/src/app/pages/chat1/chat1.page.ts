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
  selector: 'app-chat1',
  templateUrl: './chat1.page.html',
  styleUrls: ['./chat1.page.scss'],
})
export class Chat1Page implements OnInit {

  current = 1;

  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }

  onCall() {
    this.router.navigate(['out-going']);
  }
  onVideo() {
    this.router.navigate(['calling2']);
  }
  onChat() {
    this.router.navigate(['chat3']);
  }
  onComming() {
    this.router.navigate(['calling1']);
  }
  onBack() {
    this.NavCtrl.back();
  }


}
