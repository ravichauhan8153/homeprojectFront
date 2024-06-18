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

  addReviewdialog() {
    this.dialogRef = this._dialog.open(AddReviewComponent, {
      width: '500px',
      data: {

      },
    });
  }
}
