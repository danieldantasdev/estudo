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
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.page.html',
  styleUrls: ['./friend-profile.page.scss'],
})
export class FriendProfilePage implements OnInit {

  constructor(private router: Router,
    private NavCtrl: NavController) { }

  ngOnInit() {
  }
  goToHome() {
    this.router.navigate(['']);
  }
  goToBack() {
    this.NavCtrl.back();
  }

}
