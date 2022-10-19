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
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  @ViewChild('incomeChart') incomeChart;
  bars: any;


  constructor(private router: Router,
              public util: UtilService)
  {
    setTimeout(() => {
      this.createCryptoChart();
    }, 1000);
  }


  createCryptoChart() {
    this.bars = new Chart(this.incomeChart.nativeElement, {
      type: 'line',
      data: {
        datasets: [{
          data: [12, 19, 3, 5,],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',

          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',

          ],
          borderWidth: 1
        }]
      },
      options: {
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
              beginAtZero: false,
            },
            stacked: false,
          }],
          xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              beginAtZero: false,
            },
            stacked: false,
          }]
        }
      }
    });
  }

  ngOnInit() {
  }

  goToSearch() {
    this.router.navigate(['search-modal']);
  }
  goToCurrency() {
    this.router.navigate(['currency']);
  }

}
