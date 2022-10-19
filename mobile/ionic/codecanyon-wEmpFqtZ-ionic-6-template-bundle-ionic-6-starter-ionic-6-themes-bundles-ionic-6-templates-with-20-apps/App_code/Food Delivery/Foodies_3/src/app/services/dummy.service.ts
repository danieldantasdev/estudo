/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  categories = [
    {
      img: 'assets/imgs/logo.png',
      name: 'All'
    },
    {
      img: 'assets/imgs/coffee.png',
      name: 'Coffee'
    },
    {
      img: 'assets/imgs/drink.png',
      name: 'Drink'
    },
    {
      img: 'assets/imgs/food.png',
      name: 'Fast Food'
    },
    {
      img: 'assets/imgs/cupcake.png',
      name: 'Cake'
    },
    {
      img: 'assets/imgs/cupcake2.png',
      name: 'Cake'
    },
    {
      img: 'assets/imgs/milk-tea.png',
      name: 'Milk Tea'
    },
  ];

  foods = [
    {
      img: 'assets/imgs/food1.jpg',
      name: 'Turkey Breast',
      price: '13.00',
      type: 'veg',
      status: false
    },
    {
      img: 'assets/imgs/food2.jpg',
      name: 'Black Forest Ham',
      price: '19.00',
      type: 'veg',
      status: true
    },
    {
      img: 'assets/imgs/food3.jpg',
      name: 'Albacore Tuna',
      price: '22.00',
      type: 'non-veg',
      status: true
    },
    {
      img: 'assets/imgs/food4.jpg',
      name: 'Mac and Cheese',
      price: '23.00',
      type: 'veg',
      status: true
    },
    {
      img: 'assets/imgs/food5.jpg',
      name: 'Asian Noodle',
      price: '13.00',
      type: 'veg',
      status: false
    },
    {
      img: 'assets/imgs/food6.jpg',
      name: 'Kimchi',
      price: '17.00',
      type: 'veg',
      status: false
    },
    {
      img: 'assets/imgs/food7.jpg',
      name: 'Skillet Cookie',
      price: '14.00',
      type: 'non-veg',
      status: false
    },
    {
      img: 'assets/imgs/food8.jpg',
      name: 'Chilli Lime Tofu',
      price: '15.00',
      type: 'veg',
      status: true
    },
    {
      img: 'assets/imgs/food9.jpg',
      name: 'Steak and Cheest',
      price: '20.00',
      type: 'veg',
      status: true
    },
  ];

  rest = [
    {
      img: 'assets/imgs/rest1.jpg',
      name: 'Kichi Cofee & Drink',
      price: ''
    },
    {
      img: 'assets/imgs/rest2.jpg',
      name: 'Chill Lands Coffee',
      price: ''
    },
    {
      img: 'assets/imgs/rest3.jpg',
      name: 'BB & BG Coffee',
      price: ''
    },
    {
      img: 'assets/imgs/rest4.jpg',
      name: 'Lettie Waters Coffee',
      price: ''
    },
    {
      img: 'assets/imgs/rest5.jpg',
      name: 'The Coffee House - Kuhic Via',
      price: ''
    },
    {
      img: 'assets/imgs/rest6.jpg',
      name: 'Royal Coffee & Drink',
      price: ''
    },
    {
      img: 'assets/imgs/rest7.jpg',
      name: 'Brakus Post Drink',
      price: ''
    },
    {
      img: 'assets/imgs/rest8.jpg',
      name: 'Kichi Cofee & Drink',
      price: ''
    },
    {
      img: 'assets/imgs/rest9.jpg',
      name: 'Chill Lands Coffee',
      price: ''
    },
    {
      img: 'assets/imgs/rest10.jpg',
      name: 'BB & BG Coffee',
      price: ''
    }
  ];

  userList = [
    {
      img: 'assets/imgs/user1.jpg',
      name: 'Mrs. Myra Ward',
      designation: 'English',
    },
    {
      img: 'assets/imgs/user2.jpg',
      name: 'Mrs. Belle Ball',
      designation: 'English, French',
    },
    {
      img: 'assets/imgs/user3.jpg',
      name: 'Mrs. Nellie Rose',
      designation: 'Design',
    },
    {
      img: 'assets/imgs/user4.jpg',
      name: 'Mr. Travis Watkins',
      designation: 'Analytics',
    },
    {
      img: 'assets/imgs/user5.jpg',
      name: 'Mr. Angel Bryan',
      designation: 'Cooking',
    },
    {
      img: 'assets/imgs/user6.jpg',
      name: 'Mr. Gary Gardner',
      designation: 'Business',
    },
    {
      img: 'assets/imgs/user7.jpg',
      name: 'Mr. Douglas Leonard',
      designation: 'Business',
    },
  ]

  constructor() { }
}
