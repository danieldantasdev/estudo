/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cancel-request',
  templateUrl: './cancel-request.page.html',
  styleUrls: ['./cancel-request.page.scss'],
})
export class CancelRequestPage implements OnInit {

    options = [
        {
            id: '1',
            value : 'Change my mind'
        },
        {
            id: '2',
            value : 'Driver is late'
        },
        {
            id: '3',
            value : 'I got lift'
        },
        {
            id: '4',
            value : 'Driver too far'
        },
        {
            id: '5',
            value : 'Driver ask to cancel'
        },
        {
            id: '6',
            value : 'Other'
        },
    ];
    constructor() { }

    ngOnInit() {
    }

}
