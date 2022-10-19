/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-workout-tracker',
  templateUrl: './workout-tracker.page.html',
  styleUrls: ['./workout-tracker.page.scss'],
})
export class WorkoutTrackerPage implements OnInit {
  @ViewChild('barChart') barChart;

  bars: any;
  colorArray: any;
  constructor(
    private router: Router,
    private navctr: NavController
  ) {
    setTimeout(() => {
      this.createBarChart();
    }, 1000);
  }



  ngOnInit() {
  }
  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3, 6],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        cornerRadius: 20,
        fullCornerRadius: false,
        stackedRounded: false,
        legend: {
          display: false
        },
        elements: {

        },
        scales: {
          yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: true,
            },
            stacked: true,
            radius: 25
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {

              beginAtZero: true,
            },
            stacked: true,
          }]
        }
      }
    });
  }

  onWorkoutDetails() {
    this.router.navigate(['workout-details']);
  }

  onClick() {

  }

  onBack() {
    this.navctr.back();
  }
}
