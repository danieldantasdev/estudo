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
  selector: 'app-interested-in',
  templateUrl: './interested-in.page.html',
  styleUrls: ['./interested-in.page.scss'],
})
export class InterestedInPage implements OnInit {

  constructor(
    private router : Router,
    private navctr : NavController
  ) { }

  ngOnInit() {
  }

  onHome(){
    this.router.navigate(['tabs/tab1']);
  }

  onBackSetlocation(){
    this.navctr.back();
  }

}
