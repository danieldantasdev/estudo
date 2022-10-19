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
  selector: 'app-profile-setup',
  templateUrl: './profile-setup.page.html',
  styleUrls: ['./profile-setup.page.scss'],
})
export class ProfileSetupPage implements OnInit {

  constructor(
    private router : Router,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onTermsandCondition(){
    this.router.navigate(['terms-conditions']);
  }

  onBackRegister(){
    this.navctr.back();
  }

  openPicker(){

  }

}
