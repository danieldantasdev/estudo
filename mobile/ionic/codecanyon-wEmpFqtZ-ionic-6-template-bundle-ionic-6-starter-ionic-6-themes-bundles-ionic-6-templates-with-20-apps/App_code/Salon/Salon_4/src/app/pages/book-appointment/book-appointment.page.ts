/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { DummyService } from './../../services/dummy.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {

  @ViewChild('slideDate') dateslide: IonSlides;
  currentWeek = 0;
  days = [];
  initDate: any;
  selectedDate;
  currentDate: any;
  month = '';

  services = [];
  activeSlot;

  slots = [
    '10:00 AM', '11:00 AM', '11:30 AM', '12:00 PM', '01:00 PM', '02:00 PM', '03:30 PM', '04:00 PM',
    '04:00 PM', '04:30 PM', '05:00 PM', '06:00 PM', '07:00 PM', '07:30 PM', '08:00 PM', '08:30 AM'
  ];

  constructor(private dummy: DummyService) {
    this.services = this.dummy.services;
    this.dateConfi();
  }

  ngOnInit() {
  }

  dateConfi() {
    setTimeout(() => {
      this.dateslide.lockSwipes(true);
    }, 150);
    this.selectedDate = moment().format().split('T')[0];
    this.currentDate = moment().format().split('T')[0];

    this.days = [];

    this.initDate = moment().format();

    const startOfWeek = moment().startOf('week');

    const endOfWeek = moment().endOf('week');

    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM'),
        month: day.format('MMMM')
      };
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
    this.month = this.days[3].month;
  }

  selectDate(date) {
    console.log(date);
    if (this.currentDate <= date.val.split('T')[0]) {
      this.selectedDate = date.val.split('T')[0];
      console.log(this.selectedDate);
    }
  }

  previousWeek() {
    if (this.currentWeek !== 0) {
      this.dateslide.update();
      this.days = [];
      this.currentWeek = this.currentWeek - 1;
      const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
      const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
      let day = startOfWeek;
      while (day <= endOfWeek) {
        const data = {
          date: day.toDate().getDate(),
          day: day.format('ddd'),
          val: day.format(),
          selectDay: day.format('dddd DD MMMM'),
          month: day.format('MMMM')
        };
        this.days.push(data);
        day = day.clone().add(1, 'd');
      }
      console.log(this.days);
      this.month = this.days[3].month;
    }
  }

  nextWeek() {
    this.dateslide.update();
    this.days = [];
    this.currentWeek++;
    console.log(this.currentWeek);
    const startOfWeek = moment().add(this.currentWeek, 'weeks').startOf('week');
    const endOfWeek = moment().add(this.currentWeek, 'weeks').endOf('week');
    let day = startOfWeek;
    while (day <= endOfWeek) {
      const data = {
        date: day.toDate().getDate(),
        day: day.format('ddd'),
        val: day.format(),
        selectDay: day.format('dddd DD MMMM'),
        month: day.format('MMMM')
      };
      this.days.push(data);
      day = day.clone().add(1, 'd');
    }
    console.log(this.days);
    this.month = this.days[3].month;
  }

}
