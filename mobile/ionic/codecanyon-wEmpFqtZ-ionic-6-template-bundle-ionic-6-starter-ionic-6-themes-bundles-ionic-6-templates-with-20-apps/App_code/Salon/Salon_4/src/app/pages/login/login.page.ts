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
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email = 'adrian.james@gmail.com';
    password = 'admin@123';

    constructor(private router: Router) { }

    ngOnInit() {
    }

    goToRegister() {
        this.router.navigate(['/register']);
    }

    goToTabs() {
        this.router.navigate(['/tabs']);
    }

}
