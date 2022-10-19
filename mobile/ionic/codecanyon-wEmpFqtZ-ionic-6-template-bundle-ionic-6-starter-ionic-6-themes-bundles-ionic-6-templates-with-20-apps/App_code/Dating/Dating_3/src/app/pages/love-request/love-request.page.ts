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
  selector: 'app-love-request',
  templateUrl: './love-request.page.html',
  styleUrls: ['./love-request.page.scss'],
})
export class LoveRequestPage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onMatch(){
    this.router.navigate(['match']);
  }

}
