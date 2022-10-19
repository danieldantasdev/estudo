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

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    username = 'Adrian James';
    phone = '9876543212';
    email = 'adrian.james@gmail.com';
    password = 'admin@123';

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToLogin() {
        this.router.navigate(['/login']);
    }

    goToTabs() {
        this.router.navigate(['/tabs']);
    }

}
