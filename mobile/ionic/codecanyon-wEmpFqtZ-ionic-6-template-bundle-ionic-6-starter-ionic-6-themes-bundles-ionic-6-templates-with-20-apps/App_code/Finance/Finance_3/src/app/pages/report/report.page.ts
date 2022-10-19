/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { OnInit } from '@angular/core';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Chart } from 'chart.js';
import { ReportModalPage } from '../report-modal/report-modal.page';

@Component({
  selector: 'app-report',
  templateUrl: './report.page.html',
  styleUrls: ['./report.page.scss'],
})
export class ReportPage implements OnInit {
  @ViewChild('lineChart') lineChart;

  line: any;
  current = 1;

  constructor(
    private modalController: ModalController
  ) {
    setTimeout(() => {
      this.createLineChart();
    }, 1000);
  }

  ngOnInit() {
  }


  createLineChart() {
    this.line = new Chart(this.lineChart.nativeElement, {
      type: 'line',
      data: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
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
            '#febc34',
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
            display: true //this will remove all the x-axis grid lines
          }],
          yAxes: [{
            display: false //this will remove all the x-axis grid lines
          }],
        }
      }
    });
  }

  async onModal() {
    const modal = await this.modalController.create({
      component: ReportModalPage,
      cssClass: 'custom_modal',
      componentProps: { value: 123 }
    });

    await modal.present();

  }
}
