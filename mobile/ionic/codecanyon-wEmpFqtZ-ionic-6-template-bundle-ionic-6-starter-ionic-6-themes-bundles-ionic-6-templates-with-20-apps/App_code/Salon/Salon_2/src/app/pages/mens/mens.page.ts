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
  selector: 'app-mens',
  templateUrl: './mens.page.html',
  styleUrls: ['./mens.page.scss'],
})
export class MensPage implements OnInit {

  constructor(private router: Router,
              private NavCtrl: NavController) { }

  ngOnInit() {
  }
  goToBack() {
    this.NavCtrl.back();
  }
  goToSlot() {
    this.router.navigate(['select-slot']);
  }

}
