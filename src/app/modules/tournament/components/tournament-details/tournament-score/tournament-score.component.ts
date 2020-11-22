import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Match } from '../../../models/match.model';
import { TournamentService } from '../../../services/tournament.service';

export interface DialogData {
  match?: Match,
  type: string,
  id?: any,
  tournamentID?: string,
}

@Component({
  selector: 'app-tournament-score',
  templateUrl: './tournament-score.component.html',
  styleUrls: ['./tournament-score.component.css']
})
export class TournamentScoreComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, private tournamentService: TournamentService, public dialogRef: MatDialogRef<TournamentScoreComponent>) { }

  ngOnInit(): void {
  }

  form = new FormGroup({
    winner: new FormControl('', Validators.required),
  });

  result = false;

  submit() {
    if(this.form.valid) {
      this.tournamentService.getConfig().subscribe(config => {
        if(this.data.type == 'robin') {
          this.tournamentService.setMatchScore(config.apiURL, this.data.match._id, this.form.get('winner').value).subscribe(
            res => {
              this.dialogRef.close({winner: this.form.get('winner').value});
            },
            error => {
              this.result = true;
            }
          )
        }
        else if(this.data.type == 'bracket') {
          let winner = this.form.get('winner').value;
          if(winner == 1) {
            winner = [1,0];
          }
          else if(winner == 2) {
            winner = [0,1];
          }
          this.tournamentService.setBracketScore(config.apiURL, this.data.tournamentID, this.data.id, winner).subscribe(
            res => {
              this.dialogRef.close({winner: winner});
            },
            error => {
              this.dialogRef.close();
            }
          )
        }
      });
    }
  }

  exit(): void {
    this.dialogRef.close();
  }

}
