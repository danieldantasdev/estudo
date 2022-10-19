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

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onEdit() {

  }
  onSetting() {
    this.router.navigate(['setting']);
  }
  onOrder() {
    this.router.navigate(['orders']);
  }
  onVoucher() {

  }
  onGiftcard() {
    this.router.navigate(['gift-card2']);
  }
  onUser() {
    this.router.navigate(['user-details']);
  }
  onPayment() {
    this.router.navigate(['card']);
  }
  onDelivery() {
    this.router.navigate(['my-orders']);
  }
  onSignout() {
    this.router.navigate(['login']);
  }

}
