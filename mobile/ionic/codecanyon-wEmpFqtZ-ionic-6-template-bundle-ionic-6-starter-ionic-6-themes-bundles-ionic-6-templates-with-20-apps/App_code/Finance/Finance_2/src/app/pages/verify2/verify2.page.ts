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
  selector: 'app-verify2',
  templateUrl: './verify2.page.html',
  styleUrls: ['./verify2.page.scss'],
})
export class Verify2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToNext() {
    this.router.navigate(['verify3']);
  }

}
