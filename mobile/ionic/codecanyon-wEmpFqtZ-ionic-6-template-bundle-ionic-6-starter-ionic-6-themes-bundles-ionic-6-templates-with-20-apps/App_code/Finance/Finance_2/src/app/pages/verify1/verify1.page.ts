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
  selector: 'app-verify1',
  templateUrl: './verify1.page.html',
  styleUrls: ['./verify1.page.scss'],
})
export class Verify1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNext() {
    this.router.navigate(['verify2']);
  }
}
