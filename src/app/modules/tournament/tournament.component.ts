import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Deserialize } from 'cerialize';
import { NgxSpinnerService } from 'ngx-spinner';
import { TournamentCreateComponent } from './components/tournament-create/tournament-create.component';
import { TournamentJoinComponent } from './components/tournament-join/tournament-join.component';
import { Tournament } from './models/tournament.model';
import { TournamentService } from './services/tournament.service';

@Component({
  selector: 'app-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.css']
})
export class TournamentComponent implements OnInit {

  constructor(private trnService: TournamentService, public dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadTournaments();
  }

  tournamentsAdmin: Tournament[];
  tournamentsPlayer: Tournament[];

  loadTournaments() {
    this.spinner.show();
    this.trnService.getConfig().subscribe(config => {
      this.trnService.getMyTournaments(config.apiURL).subscribe(data => {
        this.tournamentsAdmin = [];
        this.tournamentsPlayer = [];
        data.data.admin.myTournaments.forEach(tournament => {
          this.tournamentsAdmin.push(Deserialize(tournament, Tournament));
        });

        data.data.player.forEach(tournament => {
          tournament.tournaments.forEach(item => {
            this.tournamentsPlayer.push(Deserialize(item, Tournament));
          })
        });
        this.spinner.hide();
      })
    })
  }

  createTournament() {
    const dialogRef = this.dialog.open(TournamentCreateComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTournaments();
      }
    });
  }

  joinTournament() {
    const dialogRef = this.dialog.open(TournamentJoinComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTournaments();
      }
    });
  }
}
