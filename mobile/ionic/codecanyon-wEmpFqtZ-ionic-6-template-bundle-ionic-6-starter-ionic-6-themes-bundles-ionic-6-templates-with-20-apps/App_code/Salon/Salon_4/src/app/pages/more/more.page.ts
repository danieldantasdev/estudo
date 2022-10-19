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
  selector: 'app-more',
  templateUrl: './more.page.html',
  styleUrls: ['./more.page.scss'],
})
export class MorePage implements OnInit {

    pages = [
        {
            name : 'About Us',
            img : 'assets/imgs/about.png',
            color: '#48ddcf',
            route : 'about'
        },
        {
            name : 'Offers',
            img : 'assets/imgs/offer.png',
            color: '#e259a9',
            route : 'offers'
        },
        {
            name : 'Gallery',
            img : 'assets/imgs/gallery.png',
            color: '#46d2ff',
            route : 'gallery'
        },
        {
            name : 'Reviews',
            img : 'assets/imgs/star.png',
            color: '#facc03',
            route : 'reviews'
        },
        {
            name : 'My Profile',
            img : 'assets/imgs/user.png',
            color: '#f34845',
            route : 'profile'
        },
        {
            name : 'Facebook Page',
            img : 'assets/imgs/facebook.png',
            color: '#5b69c2',
            route : 'facebook'
        },
        {
            name : 'Settings',
            img : 'assets/imgs/settings.png',
            color: '#41d07a',
            route : 'settings'
        },
        {
            name : 'Appointments',
            img : 'assets/imgs/calendar.png',
            color: '#b238f2',
            route : 'appointments'
        }
    ]

    constructor(private route: Router) { }

    ngOnInit() {
    }

    goToPage(val) {
        if(val == 'about') {
            this.route.navigate(['/about']);
        }
        if(val == 'offers') {
            this.route.navigate(['/offers']);
        }
        if(val == 'gallery') {
            this.route.navigate(['/gallery']);
        }
        if(val == 'reviews') {
            this.route.navigate(['/review']);
        }
        if(val == 'profile') {
            // this.route.navigate(['/about']);
        }
        if(val == 'facebook') {
            // this.route.navigate(['/about']);
        }
        if(val == 'settings') {
            // this.route.navigate(['/about']);
        }
        if(val == 'appointments') {
            // this.route.navigate(['/about']);
        }
    }

}
