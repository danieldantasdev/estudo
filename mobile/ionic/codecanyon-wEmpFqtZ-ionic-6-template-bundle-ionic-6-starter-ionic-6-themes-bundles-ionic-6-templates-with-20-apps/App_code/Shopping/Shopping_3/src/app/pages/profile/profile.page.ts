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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToAccInfo() {
        this.router.navigate(['/account-info']);
    }

    goToMyPosts() {
        this.router.navigate(['/my-post']);
    }

    goToMyOrders() {
        this.router.navigate(['/my-orders']);
    }

    goToPaymentMethod() {
        this.router.navigate(['/payment-methods']);
    }

    goToAddresses() {
        this.router.navigate(['/delivery-addresses']);
    }

    goToSettings() {
        this.router.navigate(['/settings']);
    }

    logout() {
        this.router.navigate(['']);
    }

}
