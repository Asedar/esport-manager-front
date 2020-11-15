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


@NgModule({
  declarations: [TournamentComponent, TournamentCardComponent, TournamentDetailsComponent, TournamentCreateComponent, TournamentJoinComponent],
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
  ]
})
export class TournamentModule { }