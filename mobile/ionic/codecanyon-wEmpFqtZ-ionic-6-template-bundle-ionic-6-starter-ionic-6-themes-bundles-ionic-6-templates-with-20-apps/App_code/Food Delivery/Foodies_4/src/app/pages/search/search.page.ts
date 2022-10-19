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
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

    history = [
        'Mcdonalds', 'Coffee', 'Pizza Hut'
    ];
    tags = [
        'Burger Meal', 'Starbucks', 'Pizza Hut', 'Pice Chicken', 'Coffee'
    ];

    constructor(
      private router : Router
    ) { }

    ngOnInit() {
    }

    onbackHome(){
      this.router.navigate(['tabs/tab1'])
    }

    onFilter() {

    }

    onClick() {

    }

}
