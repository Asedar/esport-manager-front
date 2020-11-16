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
  }

  @Input() tournament: Tournament
}
