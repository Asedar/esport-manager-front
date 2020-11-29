import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsComponent } from './teams.component';
import { TeamCardComponent } from './components/team-card/team-card.component';
import { TeamJoinComponent } from './components/team-join/team-join.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { NavbarModule } from '../navbar/navbar.module';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { NgxSpinnerModule } from 'ngx-spinner';


@NgModule({
  declarations: [TeamsComponent, TeamCardComponent, TeamJoinComponent, TeamDetailsComponent, TeamCreateComponent],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    NavbarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    NgxSpinnerModule
  ],
  exports: [
    TeamCardComponent,
    TeamDetailsComponent
  ]
})
export class TeamsModule { }
