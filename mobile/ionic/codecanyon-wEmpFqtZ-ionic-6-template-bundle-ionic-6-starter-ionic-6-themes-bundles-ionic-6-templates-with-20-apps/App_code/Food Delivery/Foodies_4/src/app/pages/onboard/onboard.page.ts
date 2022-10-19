/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-onboard',
  templateUrl: './onboard.page.html',
  styleUrls: ['./onboard.page.scss'],
})
export class OnboardPage implements OnInit {
  @ViewChild('slides', { static: true }) slides: IonSlides;
  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  onSignin() {
    this.router.navigate(['sign-in']);
  }

  skip() {
    this.onSignin();
  }

  next() {
    console.log('next slide');
    this.slides.slideNext().then(() => {

    })
  }

}
