import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';
import { Tournament } from '../../models/tournament.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Deserialize } from 'cerialize';
import * as Duel from 'duel'
import { NgttRound, NgttTournament } from 'ng-tournament-tree';
import { MatDialog } from '@angular/material/dialog';
import { TournamentAlertComponent } from './tournament-alert/tournament-alert.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Team } from 'src/app/modules/teams/models/team.model';
import { TeamDetailsComponent } from 'src/app/modules/teams/components/team-details/team-details.component';


@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css'],
})
export class TournamentDetailsComponent implements OnInit {

  constructor(private trnService: TournamentService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog, private storageService: LocalStorageService) { }
  
  ngOnInit(): void {
    this.loadTournaments();
  }

  status = '';
  tournament: Tournament;
  myTournamentData: NgttTournament = {rounds: []};
  duel;
  playerId = this.storageService.getUserID();

  loadTournaments() {
    this.trnService.getConfig().subscribe(config => {
      this.trnService.getSingleTournament(config.apiURL, this.route.snapshot.paramMap.get("id")).subscribe(data => {
        if(data.data) {
          this.tournament = Deserialize(data.data, Tournament);
          if(this.tournament.status == 'created') {
            this.status = 'Open'
          }
      
          if(this.tournament.status == 'in-progress') {
            this.status = 'In progress'
          }
      
          if(this.tournament.status == 'end') {
            this.status = 'Finished'
          }
          if(this.tournament.format == 'single-elimination' && this.tournament.status != 'created') {
            this.parseBracket();
          }
        }
        else {
          this.router.navigateByUrl('/404')
        }
      })
    })
  }

  parseBracket() {
    this.duel = Duel.restore(this.tournament.teams.length, {short: true}, this.tournament.bracket);
    let roundIndex = 1;
    let round: NgttRound = {matches: [], type: 'Winnerbracket'};
    for(let i = 0; i < this.duel.matches.length; i++) {
      if(this.duel.matches[i].id.r != roundIndex) {
        roundIndex++;
        this.myTournamentData.rounds.push(round);
        round = {...round};
        round.matches = [];
      } 
      let winner = 0;
      if(this.duel.matches[i].m) {
        winner = this.duel.matches[i].m[0] > this.duel.matches[i].m[1] ? 1 : 2;
      }
      round.matches.push({tournamentID: this.tournament._id, id: this.duel.matches[i].id, admin: this.tournament.admin, winner: winner, team1: this.tournament.teams[this.duel.matches[i].p[0] - 1] || {name: '-'}, team2: this.tournament.teams[this.duel.matches[i].p[1] - 1] || {name: '-'}});
    }
    this.myTournamentData.rounds.push({type: 'Final', matches: [{tournamentID: this.tournament._id, id: this.duel.matches[this.duel.matches.length - 1], admin: this.tournament.admin, winner: this.duel.matches[this.duel.matches.length - 1].m, team1: this.tournament.teams[this.duel.matches[this.duel.matches.length - 1].p[0] - 1] || {name: '-'}, team2: this.tournament.teams[this.duel.matches[this.duel.matches.length - 1].p[1] - 1] || {name: '-'}}]});
  }

  createBracket(){
    const dialogRef = this.dialog.open(TournamentAlertComponent, { disableClose: true, data: {id: this.tournament._id, type: 'create'} });

    dialogRef.afterClosed().subscribe(result => {
      if(result.success) {
        this.loadTournaments();
      }
    });
  }

  endTournament(){
    const dialogRef = this.dialog.open(TournamentAlertComponent, { disableClose: true, data: {id: this.tournament._id, type: 'end'} });

    dialogRef.afterClosed().subscribe(result => {
      if(result.success) {
        this.loadTournaments();
      }
    });
  }

  teamDetails(team: Team) {
    const dialogRef = this.dialog.open(TeamDetailsComponent, { disableClose: true, data: {team: team} });
  }
}
