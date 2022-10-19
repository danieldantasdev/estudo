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
  selector: 'app-congratulation',
  templateUrl: './congratulation.page.html',
  styleUrls: ['./congratulation.page.scss'],
})
export class CongratulationPage implements OnInit {

  constructor(
    private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  goToVerify1() {
    this.router.navigate(['verify1']);
  }
  goToHome() {
    this.navCtrl.navigateRoot(['tabs']);
  }

}
