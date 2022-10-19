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
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-suggest',
  templateUrl: './suggest.page.html',
  styleUrls: ['./suggest.page.scss'],
})
export class SuggestPage implements OnInit {
  loaded: boolean = false;
  cards: any[] = [
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/mobile.jpg',
      name: 'Irina',
      age: '19'
    },
  ];
  constructor(
    private router: Router,
    private NavCtrl: NavController) {

    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }

  ngOnInit() {
  }

  goToBack() {
    this.NavCtrl.back();
  }

}
