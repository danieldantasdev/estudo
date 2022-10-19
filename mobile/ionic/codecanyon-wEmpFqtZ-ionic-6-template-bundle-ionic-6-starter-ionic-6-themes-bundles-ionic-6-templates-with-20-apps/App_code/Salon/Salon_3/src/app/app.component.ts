/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router,
    private menuController: MenuController
  ) { }

  booking() {
    this.router.navigate(['booking']);
  }
  logout() {
    this.router.navigate(['login']);
    this.menuController.close();
  }
  home() {
    this.router.navigate(['home']);
    this.menuController.close();
  }
  profile() {
    this.router.navigate(['artist-profile']);
    this.menuController.close();
  }
  favorite() {

  }
  chats() {

  }
  payment() {

  }
  notification() {

  }
  settings() {

  }
  about() {

  }
}
