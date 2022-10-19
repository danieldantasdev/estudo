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
  selector: 'app-introduction-page',
  templateUrl: './introduction-page.page.html',
  styleUrls: ['./introduction-page.page.scss'],
})
export class IntroductionPagePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onRegister(){
    this.router.navigate(['welcome-page']);
  }

}
