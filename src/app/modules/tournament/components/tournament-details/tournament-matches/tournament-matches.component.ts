import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { Match } from '../../../models/match.model';
import { TournamentScoreComponent } from '../tournament-score/tournament-score.component';

@Component({
  selector: 'app-tournament-matches',
  templateUrl: './tournament-matches.component.html',
  styleUrls: ['./tournament-matches.component.css']
})
export class TournamentMatchesComponent implements OnInit {

  constructor(public dialog: MatDialog, private storageService: LocalStorageService) { }

  ngOnInit(): void {
    console.log(this.matches)
  }

  @Input() matches: Match[];

  setScore(match: Match) {
    const userID = this.storageService.getUserID();
    if(userID === match.team1.captain._id || userID === match.team2.captain._id) {

      const dialogRef = this.dialog.open(TournamentScoreComponent, { disableClose: true, data: {match: match} });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          console.log(result)
          match.winner = parseInt(result.winner);
        }
      });
    }
  }
}
