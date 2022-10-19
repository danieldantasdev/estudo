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
    private router : Router
  ) {}

  goToPaymentMethods(){
    this.router.navigate(['payment-methods']);
  }

  goToFaqs(){
    this.router.navigate(['faq']);
  }

  goToFavourite(){
    this.router.navigate(['favourite']);
  }

  goToNotification(){
    this.router.navigate(['notification']);
  }

  goToEditProfile(){
    this.router.navigate(['edit-profile'])
  }
}
