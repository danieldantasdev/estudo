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
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  viewPassword: boolean = false;
  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }
  changeType() {
    this.viewPassword = !this.viewPassword;
  }
  onBack() {
    this.navCtrl.back();
  }

  onRegister() {
    localStorage.setItem('intro', 'true');
    this.navCtrl.navigateRoot(['']);
  }
}
