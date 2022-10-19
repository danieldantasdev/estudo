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
import { MenuController } from '@ionic/angular';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-search-profile',
  templateUrl: './search-profile.page.html',
  styleUrls: ['./search-profile.page.scss'],
})
export class SearchProfilePage implements OnInit {

  constructor(
    public util: UtilService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  slideOpts = {
    slidesPerView: 3,
  };
  slideOpts2 = {
    slidesPerView: 4,
  };

  onMsg() {
    this.router.navigate(['chat2']);
  }

}
