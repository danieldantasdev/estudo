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
  loaded: boolean = false;
  cards: any[] = [
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/profile.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/profile1.jpg',
      name: 'Irina',
      age: '19'
    },
  ];
  constructor(
    private router: Router,) {
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }

  ngOnInit() {
  }
  goToFriend() {
    this.router.navigate(['friend-profile']);
  }
  goToFilter() {
    this.router.navigate(['filter']);
  }

}
