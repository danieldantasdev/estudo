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
import { ModalController } from '@ionic/angular';
import { FiltersPage } from '../filters/filters.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  loaded: boolean = false;
  cards: any[] = [
    {
      img: 'assets/images/women.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Irina',
      age: '19'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Ksenia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Yulia',
      age: '21'
    },
    {
      img: 'assets/images/women.jpg',
      name: 'Nastia',
      age: '23'
    },
    {
      img: 'assets/images/woman2.jpg',
      name: 'Irina',
      age: '19'
    },
  ];
  constructor(
    private router: Router,
    private modalController: ModalController,
  ) {
    setTimeout(() => {
      this.loaded = true;
    }, 5000);
  }

  ngOnInit() {
  }

  async onFilter() {
    const modal = await this.modalController.create({
      component: FiltersPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 },
    });

    await modal.present();
  }

  onFriendsProfile() {
    this.router.navigate(['friends-profile']);
  }

  onClick() {

  }
}
