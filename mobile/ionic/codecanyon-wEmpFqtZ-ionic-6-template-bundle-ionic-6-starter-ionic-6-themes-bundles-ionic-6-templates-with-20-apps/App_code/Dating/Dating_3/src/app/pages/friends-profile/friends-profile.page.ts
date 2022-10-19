/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-friends-profile',
  templateUrl: './friends-profile.page.html',
  styleUrls: ['./friends-profile.page.scss'],
})
export class FriendsProfilePage implements OnInit {

  constructor(
    private navctr: NavController
  ) { }

  ngOnInit() {
  }

  onBackHome(){
    this.navctr.back();
  }

  onClick(){

  }

  onFriendsProfile (){

  }

}
