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
  selector: 'app-successful-cash',
  templateUrl: './successful-cash.page.html',
  styleUrls: ['./successful-cash.page.scss'],
})
export class SuccessfulCashPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onHome() {
    this.router.navigate(['tabs/tab3']);
  }

}
