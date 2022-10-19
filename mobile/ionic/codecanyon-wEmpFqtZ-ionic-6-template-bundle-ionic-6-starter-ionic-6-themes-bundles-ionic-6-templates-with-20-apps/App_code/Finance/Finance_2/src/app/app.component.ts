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
    { title: 'Settings', url: '/home' },
    { title: 'Billing details', url: '/ride-summary' },
    { title: 'Help', url: '/payment' },
    { title: 'Security', url: '/cart' },
    { title: 'Notifications', url: '/cart' },

  ];
  constructor() {}
}
