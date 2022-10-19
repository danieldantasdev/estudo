/*
  Authors : bunchdevelopers (Rahul Jograna)
  Website : https://bunchdevelopers.com/
  App Name : ionic6Template Pack
  This App Template Source code is licensed as per the
  terms found in the Website https://bunchdevelopers.com/license
  Copyright and Good Faith Purchasers © 2021-present bunchdevelopers.
*/
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-activity-tracker',
  templateUrl: './activity-tracker.page.html',
  styleUrls: ['./activity-tracker.page.scss'],
})
export class ActivityTrackerPage implements OnInit {
  @ViewChild('barCanvas') public barCanvas: ElementRef;
  barChart: any;
  canvas: any;
  ctx: any;
  constructor(
    private navctr : NavController
  ) { }

  ngAfterViewInit() {
    this.canvas = document.getElementById('barChart');
    this.ctx = this.canvas.getContext('2d');
    Chart.elements.Rectangle.prototype.draw = function () {
      var ctx = this._chart.ctx;
      var vm = this._view;
      var left, right, top, bottom, signX, signY, borderSkipped, radius;
      var borderWidth = vm.borderWidth;


      var cornerRadius = this._chart.config.options.cornerRadius;
      var fullCornerRadius = this._chart.config.options.fullCornerRadius;
      var stackedRounded = this._chart.config.options.stackedRounded;
      var typeOfChart = this._chart.config.type;

      if (cornerRadius < 0) {
        cornerRadius = 0;
      }
      if (typeof cornerRadius == 'undefined') {
        cornerRadius = 0;
      }
      if (typeof fullCornerRadius == 'undefined') {
        fullCornerRadius = false;
      }
      if (typeof stackedRounded == 'undefined') {
        stackedRounded = false;
      }

      if (!vm.horizontal) {
        left = vm.x - vm.width / 2;
        right = vm.x + vm.width / 2;
        top = vm.y;
        bottom = vm.base;
        signX = 1;
        signY = bottom > top ? 1 : -1;
        borderSkipped = vm.borderSkipped || 'bottom';
      } else {
        left = vm.base;
        right = vm.x;
        top = vm.y - vm.height / 2;
        bottom = vm.y + vm.height / 2;
        signX = right > left ? 1 : -1;
        signY = 1;
        borderSkipped = vm.borderSkipped || 'left';
      }


      if (borderWidth) {
        var barSize = Math.min(Math.abs(left - right), Math.abs(top - bottom));
        borderWidth = borderWidth > barSize ? barSize : borderWidth;
        var halfStroke = borderWidth / 2;
        var borderLeft = left + (borderSkipped !== 'left' ? halfStroke * signX : 0);
        var borderRight = right + (borderSkipped !== 'right' ? -halfStroke * signX : 0);
        var borderTop = top + (borderSkipped !== 'top' ? halfStroke * signY : 0);
        var borderBottom = bottom + (borderSkipped !== 'bottom' ? -halfStroke * signY : 0);
        if (borderLeft !== borderRight) {
          top = borderTop;
          bottom = borderBottom;
        }
        if (borderTop !== borderBottom) {
          left = borderLeft;
          right = borderRight;
        }
      }

      ctx.beginPath();
      ctx.fillStyle = vm.backgroundColor;
      ctx.strokeStyle = vm.borderColor;
      ctx.lineWidth = borderWidth;


      var corners = [
        [left, bottom],
        [left, top],
        [right, top],
        [right, bottom]
      ];

      var borders = ['bottom', 'left', 'top', 'right'];
      var startCorner = borders.indexOf(borderSkipped, 0);
      if (startCorner === -1) {
        startCorner = 0;
      }

      function cornerAt(index) {
        return corners[(startCorner + index) % 4];
      }

      var corner = cornerAt(0);
      ctx.moveTo(corner[0], corner[1]);


      var nextCornerId, nextCorner, width, height, x, y;
      for (var i = 1; i < 4; i++) {
        corner = cornerAt(i);
        nextCornerId = i + 1;
        if (nextCornerId == 4) {
          nextCornerId = 0
        }

        nextCorner = cornerAt(nextCornerId);

        width = corners[2][0] - corners[1][0];
        height = corners[0][1] - corners[1][1];
        x = corners[1][0];
        y = corners[1][1];

        var radius = cornerRadius;
        if (radius > Math.abs(height) / 2) {
          radius = Math.floor(Math.abs(height) / 2);
        }
        if (radius > Math.abs(width) / 2) {
          radius = Math.floor(Math.abs(width) / 2);
        }

        var x_tl, x_tr, y_tl, y_tr, x_bl, x_br, y_bl, y_br;
        if (height < 0) {
          x_tl = x;
          x_tr = x + width;
          y_tl = y + height;
          y_tr = y + height;

          x_bl = x;
          x_br = x + width;
          y_bl = y;
          y_br = y;

          ctx.moveTo(x_bl + radius, y_bl);

          ctx.lineTo(x_br - radius, y_br);

          ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius);


          ctx.lineTo(x_tr, y_tr + radius);

          fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);


          ctx.lineTo(x_tl + radius, y_tl);

          fullCornerRadius ? ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius) : ctx.lineTo(x_tl, y_tl, x_tl, y_tl + radius);


          ctx.lineTo(x_bl, y_bl - radius);

          ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);

        } else if (width < 0) {
          x_tl = x + width;
          x_tr = x;
          y_tl = y;
          y_tr = y;

          x_bl = x + width;
          x_br = x;
          y_bl = y + height;
          y_br = y + height;

          ctx.moveTo(x_bl + radius, y_bl);

          ctx.lineTo(x_br - radius, y_br);

          fullCornerRadius ? ctx.quadraticCurveTo(x_br, y_br, x_br, y_br - radius) : ctx.lineTo(x_br, y_br, x_br, y_br - radius);

          ctx.lineTo(x_tr, y_tr + radius);

          fullCornerRadius ? ctx.quadraticCurveTo(x_tr, y_tr, x_tr - radius, y_tr) : ctx.lineTo(x_tr, y_tr, x_tr - radius, y_tr);

          ctx.lineTo(x_tl + radius, y_tl);

          ctx.quadraticCurveTo(x_tl, y_tl, x_tl, y_tl + radius);

          ctx.lineTo(x_bl, y_bl - radius);

          ctx.quadraticCurveTo(x_bl, y_bl, x_bl + radius, y_bl);

        } else {

          var lastVisible = 0;
          for (var findLast = 0, findLastTo = this._chart.data.datasets.length; findLast < findLastTo; findLast++) {
            if (!this._chart.getDatasetMeta(findLast).hidden) {
              lastVisible = findLast;
            }
          }
          var rounded = this._datasetIndex === lastVisible;

          if (rounded) {
            ctx.moveTo(x + radius, y);

            ctx.lineTo(x + width - radius, y);

            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);


            ctx.lineTo(x + width, y + height - radius);

            if (fullCornerRadius || typeOfChart == 'horizontalBar')
              ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            else
              ctx.lineTo(x + width, y + height, x + width - radius, y + height);


            ctx.lineTo(x + radius, y + height);

            if (fullCornerRadius)
              ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            else
              ctx.lineTo(x, y + height, x, y + height - radius);


            ctx.lineTo(x, y + radius);

            if (fullCornerRadius || typeOfChart == 'bar')
              ctx.quadraticCurveTo(x, y, x + radius, y);
            else
              ctx.lineTo(x, y, x + radius, y);
          } else {
            ctx.moveTo(x, y);
            ctx.lineTo(x + width, y);
            ctx.lineTo(x + width, y + height);
            ctx.lineTo(x, y + height);
            ctx.lineTo(x, y);
          }
        }

      }

      ctx.fill();
      if (borderWidth) {
        ctx.stroke();
      }
    };

    var data = {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [{
        label: 'data 0',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],
        borderWidth: 0
      }, {
        label: 'data 1',
        data: [20, 24, 10, 15, 12, 13],
        backgroundColor: [
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',

          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(75, 192, 192, 1)'

        ],
        borderWidth: 0
      }, {
        label: 'data 2',
        data: [20, 30, 30, 20, 14, 20],
        backgroundColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(255, 206, 86, 1)',

          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)'


        ],
        borderWidth: 0
      }]
    };

    var options = {
      cornerRadius: 20,
      fullCornerRadius: false,
      stackedRounded: false,
      legend: {
        display: false
      },
      elements: {
        point: {
          radius: 25,
          hoverRadius: 35,
          pointStyle: 'rectRounded',

        }
      },
      scales: {
        yAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          },
          stacked: true,
          radius: 25
        }],
        xAxes: [{
          gridLines: {
            display: false
          },
          ticks: {
            beginAtZero: true
          },
          stacked: true,

        }]
      }
    };


    const myBarChart = new Chart(this.ctx, {
      type: 'bar',
      data: data,
      options: options
    });
  }


  ngOnInit() {
  }

  onClick(){

  }

  onBack (){
    this.navctr.back();
  }

}
