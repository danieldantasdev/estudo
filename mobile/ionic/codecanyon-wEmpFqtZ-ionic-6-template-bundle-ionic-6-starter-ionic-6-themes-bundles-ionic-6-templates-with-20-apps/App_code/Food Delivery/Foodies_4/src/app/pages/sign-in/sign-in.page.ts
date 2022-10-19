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
  selector: 'app-sign-in',
  templateUrl: './sign-in.page.html',
  styleUrls: ['./sign-in.page.scss'],
})
export class SignInPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignUp() {
    this.router.navigate(['sign-up']);
  }

  onForgotPassword() {
    this.router.navigate(['forgot-password']);
  }

  onHome() {
    this.router.navigate(['tabs']);
  }

  onClick() {

  }

}
