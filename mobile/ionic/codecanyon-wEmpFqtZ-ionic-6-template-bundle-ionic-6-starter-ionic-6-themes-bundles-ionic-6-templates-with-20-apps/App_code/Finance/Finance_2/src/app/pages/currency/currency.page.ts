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
import { NavController } from '@ionic/angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.page.html',
  styleUrls: ['./currency.page.scss'],
})
export class CurrencyPage implements OnInit {


  @ViewChild('coinChart') coinChart;
  bars: any;

  constructor(
    private router: Router,
    private navCtrl: NavController
    )
  {
    setTimeout(() => {
      this.createCoinChart();
    }, 1000);
  }

  createCoinChart(){
    this.bars = new Chart(this.coinChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],
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

  ngOnInit() {
  }

  goToBack() {
    this.navCtrl.back();
  }

  goToBuy() {
    this.router.navigate(['buy'])
  }



}
