import { Router } from '@angular/router';
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
  selector: 'app-social-connect',
  templateUrl: './social-connect.page.html',
  styleUrls: ['./social-connect.page.scss'],
})
export class SocialConnectPage implements OnInit {

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToMyLocation() {
        this.router.navigate(['/my-location']);
    }

}
