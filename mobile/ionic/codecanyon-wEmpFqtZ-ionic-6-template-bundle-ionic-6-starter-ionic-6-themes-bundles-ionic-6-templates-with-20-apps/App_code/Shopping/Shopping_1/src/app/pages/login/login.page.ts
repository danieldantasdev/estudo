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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBack() {
    this.navCtrl.back();
  }

  login() {
    this.navCtrl.navigateRoot(['tabs']);
  }

  onSignUp() {
    this.router.navigate(['signup']);
  }

  onForgot() {
    this.router.navigate(['forgot-password']);
  }

}
