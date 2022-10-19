/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WorkoutSchedulePageRoutingModule } from './workout-schedule-routing.module';

import { WorkoutSchedulePage } from './workout-schedule.page';
import { NgCalendarModule } from 'ionic2-calendar';

import { registerLocaleData } from '@angular/common';
import localeDe from '@angular/common/locales/de';
registerLocaleData(localeDe);

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WorkoutSchedulePageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [WorkoutSchedulePage],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-DE' }
  ]
})
export class WorkoutSchedulePageModule {}
