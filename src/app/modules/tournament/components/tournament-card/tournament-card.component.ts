import { Tournament } from './../../models/tournament.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tournament-card',
  templateUrl: './tournament-card.component.html',
  styleUrls: ['./tournament-card.component.css']
})
export class TournamentCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    if(this.tournament.teams) {
      this.numberOfTeams = this.tournament.teams.length;
    }

    if(this.tournament.status == 'created') {
      this.status = 'Open'
    }

    if(this.tournament.status == 'in-progress') {
      this.status = 'In progress'
    }

    if(this.tournament.status == 'end') {
      this.status = 'Finished'
    }
    this.date = new Date(this.tournament.date);
  }

  @Input() tournament: Tournament
  numberOfTeams = 0;
  status = ''
  date;
}
