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
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private router: Router,
    public util: UtilService
  ) { }

  ngOnInit() {
  }

  onOrders() {
    this.router.navigate(['order']);
  }

  onEdit() {
    this.router.navigate(['manage-profile']);
  }

  onPayment() {
    this.router.navigate(['payments-details'])
  }

  onLogout() {
    this.router.navigate(['login']);
  }

  onLanguages() {

  }

  onInbox() {

  }

  onAbout() {

  }

  onClick() {

  }

}
