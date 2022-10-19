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
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  current_Div = 1;

  config = {
      length: 4,
      allowNumbersOnly: true,
      disableAutoFocus: true
  }

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onSignin(){
    this.router.navigate(['sign-in']);
  }

  onClick() {

  }

}
