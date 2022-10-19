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

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private router: Router
  ) { }

  home() {
    this.router.navigate(['tabs/tab1']);
  }
  nearby() {
    this.router.navigate(['tabs/tab2']);
  }
  cart() {
    this.router.navigate(['tabs/tab3']);
  }
  payments() {
    this.router.navigate(['payments-details']);
  }
  orders() {
    this.router.navigate(['order']);
  }
  notifications() {
    this.router.navigate(['']);
  }
  inbox() {
    this.router.navigate(['']);
  }
  about() {
    this.router.navigate(['']);
  }
  logout() {
    this.router.navigate(['login']);
  }

}
