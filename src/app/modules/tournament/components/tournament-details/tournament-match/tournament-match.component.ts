import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TournamentService } from '../../../services/tournament.service';
import { TournamentScoreComponent } from '../tournament-score/tournament-score.component';

@Component({
  selector: 'app-tournament-match',
  templateUrl: './tournament-match.component.html',
  styleUrls: ['./tournament-match.component.scss']
})
export class TournamentMatchComponent implements OnInit {

  constructor(private storageService: LocalStorageService, private trnService: TournamentService, public dialog: MatDialog) { }
  t1Score = 0
  t2Score = 0
  ngOnInit(): void {
    if(this.match.winner == 1) {
      this.t1Score = 1;
    }
    if(this.match.winner == 2) {
      this.t2Score = 1;
    }
  }
  @Input() match;

  setScore() {
    if((this.match.team1.name != '-' &&this.match.team2.name != '-') && ((this.match.team1.captain == this.storageService.getUserID()) || (this.match.team2.captain == this.storageService.getUserID()) || this.match.admin._id == this.storageService.getUserID())) {
      
      const dialogRef = this.dialog.open(TournamentScoreComponent, { disableClose: true, data: {tournamentID: this.match.tournamentID, id: this.match.id, type: 'bracket', match:{team1: this.match.team1, team2: this.match.team2}} });

      dialogRef.afterClosed().subscribe(result => {
        if(result) {
          if(result.winner == 1) {
            this.t1Score = 1;
            this.t2Score = 0
          }
          if(result.winner == 2) {
            this.t1Score = 0
            this.t2Score = 1;
          }
          
        }
      });
    }
  }
}
