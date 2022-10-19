/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Trips', url: '/ride-summary', icon: 'pricetag' },
    { title: 'Wallet', url: '/payment', icon: 'card' },
    { title: 'Messages', url: '/cart', icon: 'chatbox' },
    { title: 'Driver', url: '/cart', icon: 'person' },
    { title: 'Settings', url: '/cart', icon: 'settings' },
    { title: 'Help', url: '/cart', icon: 'information' },

  ];
  constructor() {}
}
