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
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  slideOpts = {
    speed: 300,
    loop: true,
    slidesPerView: 1.1,
    slidesToScroll: 1,
    swipeToSlide: true,
    // autoplay: true,
  };
  banner = [
    { img: 'assets/banner1.jpg' },
    { img: 'assets/banner2.jpg' },
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToAddress(){
    this.router.navigate(['/address']);
  }
  goToRestaurant(){
    this.router.navigate(['/restaurant']);
  }

}
