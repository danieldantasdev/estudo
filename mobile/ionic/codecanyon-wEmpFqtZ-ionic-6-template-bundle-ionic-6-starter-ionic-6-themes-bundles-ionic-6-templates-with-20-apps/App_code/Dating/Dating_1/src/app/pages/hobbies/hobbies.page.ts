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
  selector: 'app-hobbies',
  templateUrl: './hobbies.page.html',
  styleUrls: ['./hobbies.page.scss'],
})
export class HobbiesPage implements OnInit {

  constructor(
    private router: Router,
    private NavCtrl: NavController
  ) { }

  ngOnInit() {
  }
  onBack() {
    this.NavCtrl.back();
  }
  onConfirm() {
    this.router.navigate(['verify-identity']);
  }

}
