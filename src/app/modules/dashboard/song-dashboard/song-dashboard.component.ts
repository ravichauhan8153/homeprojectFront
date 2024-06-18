import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Title } from '@angular/platform-browser';

import * as Highcharts from 'highcharts';

//COMPONENT
import { AddReviewComponent } from 'src/app/shared/dialog/add-review/add-review.component';

@Component({
  selector: 'app-song-dashboard',
  templateUrl: './song-dashboard.component.html',
  styleUrls: ['./song-dashboard.component.scss']
})
export class SongDashboardComponent {

  // Dialog Option
  dialogRef: any;

  constructor(
    private _dialog: MatDialog,
  ) {
    
  }

  ngOnInit(): void { 
    this.renderScatterChart();
    this.renderBarChart();
  }

  renderScatterChart() {
   
    let chart2 = Highcharts.chart({
      chart: {
        renderTo: 'chart-1',
        type: 'spline',
        height: 276,
      },

      title: {
        text: '',
      },

      credits: {
        enabled: false,
      },

      xAxis: {
        type: 'category',
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },

      yAxis: {
        title: {
          text: 'Post Stats',
        },
        plotLines: [
          {
            value: 0,
            width: 1,
            color: '#808080',
          },
        ],
      },

      tooltip: {
        headerFormat: '<b>{series.name}</b><br/>',
        pointFormat: '{point.y:.2f}',
      },

      legend: {
        enabled: true,
      },

      exporting: {
        enabled: false,
      },

      series: [
        {
          type: 'line',
          name: 'Re post',
          color: '#219653',
          data: [10,20],
        },
        {
          type: 'line',
          name: 'Total Comment',
          color: '#9B51E0',
          data: [10,20],
        },
        {
          type: 'line',
          name: 'Total Like',
          color: '#F2994A',
          data: [10,20],
        },
      ],
    });
  }

  renderBarChart(){
    var chart3 = Highcharts.chart({
      chart: {
        renderTo: 'chart-2', // Specify the ID of the container where the chart should be rendered
        type: 'column',
      },
      title: {
        text: 'Week-wise Connection and Followers Data',
      },
      xAxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      },
      yAxis: {
        title: {
          text: 'Follower-Connection',
        },
      },
      series: [
        {
          name: 'Followers',
          color: '#FB6514',
          type: 'column',
          data: [10,20],
        },
        {
          name: 'Connection',
          color: '#FEB273',
          type: 'column',
          data: [10,20],
        },
      ],
    });
  }
  
  addReviewdialog() {
    this.dialogRef = this._dialog.open(AddReviewComponent, {
      width: '500px',
      data: {

      },
    });
  }
}
