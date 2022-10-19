/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Home', url: '/home', icon: 'home' },
    { title: 'Item', url: '/item', icon: 'pricetag' },
    { title: 'Products', url: '/products', icon: 'heart' },
    { title: 'Cart', url: '/cart', icon: 'cart' },
    { title: 'Categories', url: '/categories', icon: 'bookmark' },
    { title: 'Collection', url: '/collection', icon: 'trash' },
    { title: 'Add Address', url: '/add-address', icon: 'cart' },
    { title: 'Checkout', url: '/checkout', icon: 'checkmark-done' },
    { title: 'Contact', url: '/contact', icon: 'call' },
    { title: 'Story', url: '/story', icon: 'cart' },
    { title: 'Blog', url: '/blog', icon: 'archive' },
    { title: 'Blog Detail', url: '/blog-detail', icon: 'archive' },
    { title: 'Payment Method', url: '/payment', icon: 'card' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
