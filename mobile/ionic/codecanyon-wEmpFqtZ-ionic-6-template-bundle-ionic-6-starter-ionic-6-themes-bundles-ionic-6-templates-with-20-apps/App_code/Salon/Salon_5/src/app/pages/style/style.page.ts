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
  selector: 'app-style',
  templateUrl: './style.page.html',
  styleUrls: ['./style.page.scss'],
})
export class StylePage implements OnInit {

  constructor(private router: Router,
    private navCtrl: NavController) { }

  ngOnInit() {
  }

  Back() {
    this.navCtrl.back();
  }

  goToVisit() {
    this.router.navigate(['book-visit'])
  }

}
