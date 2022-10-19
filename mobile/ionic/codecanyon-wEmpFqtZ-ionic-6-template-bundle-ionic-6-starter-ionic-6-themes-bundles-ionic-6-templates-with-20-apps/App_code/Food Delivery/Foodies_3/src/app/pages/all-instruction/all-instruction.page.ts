/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-all-instruction',
  templateUrl: './all-instruction.page.html',
  styleUrls: ['./all-instruction.page.scss'],
})
export class AllInstructionPage implements OnInit {

    users;

    constructor(private navCtrl: NavController, private dummy: DummyService) {
        this.users = this.dummy.userList;
    }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

}
