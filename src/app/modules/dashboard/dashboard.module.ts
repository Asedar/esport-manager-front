import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSelectModule} from '@angular/material/select';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatDividerModule} from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RandomizerComponent } from './randomizer/randomizer.component';
import { AccountComponent } from './account/account.component';
import { BrowseComponent } from './tournaments/browse/browse.component';
import { MyTournamentsComponent } from './tournaments/my-tournaments/my-tournaments.component';
import { TournamentComponent } from './tournaments/tournament/tournament.component';
import { RandomizerInputComponent } from './randomizer/randomizer-input/randomizer-input.component';
import {MatRadioModule} from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [DashboardComponent, NavbarComponent, RandomizerComponent, AccountComponent, BrowseComponent, MyTournamentsComponent, TournamentComponent, RandomizerInputComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatDividerModule,
    MatIconModule,
    MatRadioModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    ReactiveFormsModule,
  ],
  exports: [
    NavbarComponent
  ]
})
export class DashboardModule { }
