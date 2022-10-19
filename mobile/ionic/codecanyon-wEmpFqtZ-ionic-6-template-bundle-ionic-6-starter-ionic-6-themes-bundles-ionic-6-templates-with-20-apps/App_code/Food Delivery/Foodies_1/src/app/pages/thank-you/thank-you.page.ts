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
  selector: 'app-thank-you',
  templateUrl: './thank-you.page.html',
  styleUrls: ['./thank-you.page.scss'],
})
export class ThankYouPage implements OnInit {

  constructor(
    private NavCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.NavCtrl.back();
  }

  onContinue() {
    this.router.navigate(['']);
  }

  onHome() {
    this.router.navigate(['']);
  }

}
