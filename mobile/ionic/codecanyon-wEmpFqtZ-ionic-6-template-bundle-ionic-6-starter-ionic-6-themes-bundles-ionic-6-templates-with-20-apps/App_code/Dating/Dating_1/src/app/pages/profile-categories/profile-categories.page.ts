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
  selector: 'app-profile-categories',
  templateUrl: './profile-categories.page.html',
  styleUrls: ['./profile-categories.page.scss'],
})
export class ProfileCategoriesPage implements OnInit {

  constructor(
    public util: UtilService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  onFav() {
    this.router.navigate(['match'])
  }
  onMessage() {
    this.router.navigate(['conversations']);
  }
  onVideo() {
    this.router.navigate(['videos']);
  }
  onSettings() {
    this.router.navigate(['settings']);
  }
  onList() {
    this.router.navigate(['my-friend']);
  }
  onClick() {

  }
}
