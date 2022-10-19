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
  selector: 'app-my-saved',
  templateUrl: './my-saved.page.html',
  styleUrls: ['./my-saved.page.scss'],
})
export class MySavedPage implements OnInit {

  tabID = 1;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onBackProfile() {

  }

  onClick() {

  }

  onFavourite() {
    this.router.navigate(['favourite']);
  }

}
