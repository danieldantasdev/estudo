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
  selector: 'app-other-navigationpage',
  templateUrl: './other-navigationpage.page.html',
  styleUrls: ['./other-navigationpage.page.scss'],
})
export class OtherNavigationpagePage implements OnInit {

  constructor(
    private router : Router
  ) { }

  ngOnInit() {
  }

  onActivityTracker(){
    this.router.navigate(['activity-tracker']);
  }

  onAddAlaram(){
    this.router.navigate(['add-alarm']);
  }

  onAddSchedule(){
    this.router.navigate(['add-schedule']);
  }

  onWorkoutSchedule(){
    this.router.navigate(['workout-schedule']);
  }

  onWorkoutTracker(){
    this.router.navigate(['workout-tracker']);
  }

  onSleepSchedule(){
    this.router.navigate(['sleep-schedule']);
  }

  onSleepTracker(){
    this.router.navigate(['sleep-tracker']);
  }

  onProgressphoto(){
    this.router.navigate(['progress-photos']);
  }

  onComparison(){
    this.router.navigate(['comparison']);
  }

  onMealSchedule(){
    this.router.navigate(['meal-schedule']);
  }

  onBreakfast(){
    this.router.navigate(['breakfast']);
  }

  onMealPlanner(){
    this.router.navigate(['meal-planner']);
  }

  onSuccess(){
    this.router.navigate(['success']);
  }


}
