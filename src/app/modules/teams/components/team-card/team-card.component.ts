import { Component, Input, OnInit } from '@angular/core';
import { Team } from '../../models/team.model';

@Component({
  selector: 'app-team-card',
  templateUrl: './team-card.component.html',
  styleUrls: ['./team-card.component.css']
})
export class TeamCardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() team: Team;

}
