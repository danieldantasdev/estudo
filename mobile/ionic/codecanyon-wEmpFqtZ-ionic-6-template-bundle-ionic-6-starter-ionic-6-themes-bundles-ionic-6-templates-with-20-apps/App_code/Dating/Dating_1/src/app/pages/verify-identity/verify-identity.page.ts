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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-verify-identity',
  templateUrl: './verify-identity.page.html',
  styleUrls: ['./verify-identity.page.scss'],
})
export class VerifyIdentityPage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }
  onConfirm() {
    this.router.navigate(['touch-scanning']);
  }
  onBack() {
    this.NavCtrl.back();
  }
  onClick() {

  }

}
