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
  selector: 'app-profile-categories2',
  templateUrl: './profile-categories2.page.html',
  styleUrls: ['./profile-categories2.page.scss'],
})
export class ProfileCategories2Page implements OnInit {

  constructor(
    private router: Router,
    public util: UtilService
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
