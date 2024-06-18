import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Load Module
import { SharedModule } from 'src/app/shared/shared.module';

import { DashboardRoutingModule } from './dashboard-routing.module';

// COMPONENT
import { SongDashboardComponent } from './song-dashboard/song-dashboard.component';

@NgModule({
  declarations: [
    SongDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
  ]
})
export class DashboardModule { }
