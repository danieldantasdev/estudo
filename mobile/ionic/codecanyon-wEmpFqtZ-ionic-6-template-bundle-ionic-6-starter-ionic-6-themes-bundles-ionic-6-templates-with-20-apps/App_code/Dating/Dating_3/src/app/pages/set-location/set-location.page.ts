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
  selector: 'app-set-location',
  templateUrl: './set-location.page.html',
  styleUrls: ['./set-location.page.scss'],
})
export class SetLocationPage implements OnInit {

  constructor(
    private router : Router,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onInterestedIn(){
    this.router.navigate(['interested-in']);
  }

  onBackTermsCondi(){
    this.navctr.back();
  }

}
