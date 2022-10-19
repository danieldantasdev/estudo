/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('pieChart') pieChart;
  @ViewChild('barChart') barChart;
  @ViewChild('lineChart') lineChart;
  @ViewChild('workoutChart') workoutChart;


  bars: any;
  colorArray: any;

  constructor(
    private router: Router
  ) {
    setTimeout(() => {
      this.createPieChart();
    }, 1000);
    setTimeout(() => {
      this.createBarChart();
    }, 1000);
    setTimeout(() => {
      this.createLineChart();
    }, 1000);
    setTimeout(() => {
      this.createWorkoutChart();
    }, 1000);

  }

  ngOnInit() {
  }

  createPieChart() {
    this.bars = new Chart(this.pieChart.nativeElement, {
      type: 'pie',
      data: {
        labels: ['S1', 'S2'],
        datasets: [{
          label: 'Viewers in millions',
          data: [5, 8],
          backgroundColor: this.colorArray,
          borderColor: this.colorArray,
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          display: false
        },
      }
    });
  }

  createBarChart() {
    this.bars = new Chart(this.barChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: '# of Votes',
          data: [75, 79, 77, 71, 75, 73, 76],
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
        legend: {
          display: false
        },
        tooltips: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false //this will remove all the x-axis grid lines
          }],
          yAxes: [{
            display: false //this will remove all the x-axis grid lines
          }],
        }
      }
    });
  }

  createLineChart() {
    this.bars = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Jan', 'Fab', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
          label: '# of Votes',
          data: [75, 79, 77, 71, 75, 73, 76],
          backgroundColor: [
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff',
            '#fff'
          ],
          borderColor: [
            '#92a3fd',
            // 'rgba(54, 162, 235, 1)',
            // 'rgba(255, 206, 86, 1)',
            // 'rgba(75, 192, 192, 1)',
            // 'rgba(153, 102, 255, 1)',
            // 'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        legend: {
          display: false
        },
        tooltips: {
          display: false
        },
        scales: {
          xAxes: [{
            display: false //this will remove all the x-axis grid lines
          }],
          yAxes: [{
            display: false //this will remove all the x-axis grid lines
          }],
        }
      }
    });
  }

  createWorkoutChart() {
    this.bars = new Chart(this.workoutChart.nativeElement, {
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
              // display: false
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

  onNotification() {
    this.router.navigate(['notification']);
  }

  onFullbodyWorkout() {
    this.router.navigate(['fullbody-workout']);
  }

  onClick() {

  }

}
