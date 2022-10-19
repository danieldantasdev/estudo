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
  selector: 'app-salon-specialist',
  templateUrl: './salon-specialist.page.html',
  styleUrls: ['./salon-specialist.page.scss'],
})
export class SalonSpecialistPage implements OnInit {

  selectTabs='gallery'

  constructor(
    private navctr : NavController,
    private router : Router
  ) { }

  ngOnInit() {
  }

  goBackSalonDetail(){
    this.navctr.back();
  }

  goToMessage(){
    this.router.navigate(['message']);
  }

  goToCall(){
    this.router.navigate(['call']);
  }

  onClick(){
    
  }

}
