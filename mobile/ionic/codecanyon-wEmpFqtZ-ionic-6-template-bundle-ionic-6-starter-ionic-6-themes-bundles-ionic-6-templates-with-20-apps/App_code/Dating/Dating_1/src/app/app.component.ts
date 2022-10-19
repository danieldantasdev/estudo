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
    private menuController: MenuController,
    private router: Router
  ) { }

  onMenu() {
    this.menuController.close();
  }
  onNotification() {
    this.router.navigate(['notification']);
    this.menuController.close();
  }
  logout() {
    this.router.navigate(['login']);
  }
  chat() {
    this.router.navigate(['chat']);
  }
  home() {
    this.router.navigate(['']);
  }
  info() {
  }
  help() {

  }

}
