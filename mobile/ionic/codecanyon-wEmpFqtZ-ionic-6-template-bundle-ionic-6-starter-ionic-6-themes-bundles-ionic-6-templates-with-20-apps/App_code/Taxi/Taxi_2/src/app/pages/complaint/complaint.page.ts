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
  selector: 'app-complaint',
  templateUrl: './complaint.page.html',
  styleUrls: ['./complaint.page.scss'],
})
export class ComplaintPage implements OnInit {

    options = [
        {
            id: '1',
            value : 'I lost an item'
        },
        {
            id: '2',
            value : 'Bad driver behaviour'
        },
        {
            id: '3',
            value : 'I would like a refund'
        },
        {
            id: '4',
            value : 'Different driver/dehicle'
        },
        {
            id: '5',
            value : 'Other'
        }
    ];

    tabID = 1;
    complaint = '';

    constructor(private navCtrl: NavController) { }

    ngOnInit() {
    }

    goBack() {
        this.navCtrl.back();
    }

    changeTab() {
        this.tabID = 1;
    }

}
