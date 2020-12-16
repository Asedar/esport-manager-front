import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TournamentRoutingModule } from './tournament-routing.module';
import { TournamentComponent } from './tournament.component';
import { NavbarModule } from '../navbar/navbar.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { TournamentCardComponent } from './components/tournament-card/tournament-card.component';
import { TournamentDetailsComponent } from './components/tournament-details/tournament-details.component';
import { TournamentCreateComponent } from './components/tournament-create/tournament-create.component';
import { TournamentJoinComponent } from './components/tournament-join/tournament-join.component';
import { MatSelectModule } from '@angular/material/select';
import { NumberPickerModule } from 'ng-number-picker';
import { MatRadioModule } from '@angular/material/radio';
import { NgxSpinnerModule } from 'ngx-spinner';
import {MatTabsModule} from '@angular/material/tabs';
import { TournamentMatchesComponent } from './components/tournament-details/tournament-matches/tournament-matches.component';
import { TournamentScoreComponent } from './components/tournament-details/tournament-score/tournament-score.component';
import { TournamentMatchComponent } from './components/tournament-details/tournament-match/tournament-match.component';
import { NgTournamentTreeModule } from 'ng-tournament-tree';
import {MatDividerModule} from '@angular/material/divider';
import { TournamentAlertComponent } from './components/tournament-details/tournament-alert/tournament-alert.component';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
import { TeamsModule } from '../teams/teams.module';
import {MatSortModule} from '@angular/material/sort';

@NgModule({
  declarations: [TournamentComponent, TournamentCardComponent, TournamentDetailsComponent, TournamentCreateComponent, TournamentJoinComponent, TournamentMatchesComponent, TournamentScoreComponent, TournamentMatchComponent, TournamentAlertComponent],
  imports: [
    CommonModule,
    TournamentRoutingModule,
    NavbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    NumberPickerModule,
    MatRadioModule,
    NgxSpinnerModule,
    MatTabsModule,
    NgTournamentTreeModule,
    MatDividerModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    TeamsModule,
    MatSortModule
  ]
})
export class TournamentModule { }
