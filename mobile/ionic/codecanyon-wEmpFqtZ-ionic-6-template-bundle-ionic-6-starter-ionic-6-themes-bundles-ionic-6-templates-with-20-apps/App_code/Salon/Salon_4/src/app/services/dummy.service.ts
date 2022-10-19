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

  services = [
    {
      name: 'Hair',
      img: 'assets/imgs/service1.jpg'
    },
    {
      name: 'Massage',
      img: 'assets/imgs/service2.jpg'
    },
    {
      name: 'Face & Skin',
      img: 'assets/imgs/service3.jpg'
    },
    {
      name: 'Makeup',
      img: 'assets/imgs/service4.jpg'
    },
    {
      name: 'Hair Styling',
      img: 'assets/imgs/service5.jpg'
    },
    {
      name: 'Hair Color',
      img: 'assets/imgs/service6.jpg'
    },
    {
      name: 'Hair Texture',
      img: 'assets/imgs/service7.jpg'
    },
    {
      name: 'Bridal',
      img: 'assets/imgs/service8.jpg'
    },
  ];

  products = [
    {
      img: 'assets/imgs/pro1.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro3.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro4.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro5.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro6.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro7.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro8.jpg',
      name: ''
    },
    {
      img: 'assets/imgs/pro9.jpg',
      name: ''
    }
  ];

  serviceList = [
    {
      img: 'assets/imgs/massage1.jpg',
      name: 'Hot Stone Massage',
      price: '30.00'
    },
    {
      img: 'assets/imgs/massage2.jpg',
      name: 'Aromatherapy Massage',
      price: '40.00'
    },
    {
      img: 'assets/imgs/massage3.jpg',
      name: 'Swedish Massage',
      price: '35.00'
    },
    {
      img: 'assets/imgs/massage4.jpg',
      name: 'Deep Tissue Massage',
      price: '60.00'
    },
    {
      img: 'assets/imgs/massage5.jpg',
      name: 'Sports Massage',
      price: '28.00'
    },
    {
      img: 'assets/imgs/massage6.jpg',
      name: 'Face Massage',
      price: '30.00'
    },
    {
      img: 'assets/imgs/massage7.jpg',
      name: 'Reflexology',
      price: '30.00'
    },
  ];

  constructor() { }
}
