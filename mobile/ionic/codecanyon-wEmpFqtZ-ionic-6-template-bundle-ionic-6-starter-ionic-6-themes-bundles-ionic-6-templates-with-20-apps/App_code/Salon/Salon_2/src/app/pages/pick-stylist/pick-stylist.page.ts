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
  selector: 'app-pick-stylist',
  templateUrl: './pick-stylist.page.html',
  styleUrls: ['./pick-stylist.page.scss'],
})
export class PickStylistPage implements OnInit {

  constructor(private router: Router,
              private NavCtrl: NavController) { }

  ngOnInit() {
  }
  goToStylist() {
    this.router.navigate(['stylist-info']);
  }
  goToBack() {
    this.NavCtrl.back();
  }

}
