/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {

  users = [
    {
      img: 'assets/imgs/user1.jpg',
      review: 3
    },
    {
      img: 'assets/imgs/user2.jpg',
      review: 4
    },
    {
      img: 'assets/imgs/user3.jpg',
      review: 5
    },
    {
      img: 'assets/imgs/user4.jpg',
      review: 5
    },
    {
      img: 'assets/imgs/user5.jpg',
      review: 5
    },
    {
      img: 'assets/imgs/user6.jpg',
      review: 4
    },
  ];
  constructor(private navCtrl: NavController) { }

  ngOnInit() {
  }

  goBack() {
    this.navCtrl.back();
  }

}
