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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor( private router: Router,) { }

  ngOnInit() {
  }

  goToTransfer() {
    this.router.navigate(['transfer']);
  }
  goToService() {
    this.router.navigate(['services']);
  }
  goToAddCard() {
    this.router.navigate(['add-card']);
  }

}
