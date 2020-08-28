import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatIconModule,
  ]
})
export class DashboardModule { }
