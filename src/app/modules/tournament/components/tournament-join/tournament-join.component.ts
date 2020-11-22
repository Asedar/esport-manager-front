import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-join',
  templateUrl: './tournament-join.component.html',
  styleUrls: ['./tournament-join.component.css']
})
export class TournamentJoinComponent implements OnInit {

  constructor(private tournamentService: TournamentService, public dialogRef: MatDialogRef<TournamentJoinComponent>) { }

  ngOnInit(): void {
    this.getTeams();
  }

  result = false;
  errorMessage = '';
  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
    team: new FormControl('', Validators.required)
  });
  options = [];

  getTeams() {
    this.tournamentService.getConfig().subscribe(config => {
      this.tournamentService.getMyTeams(config.apiURL).subscribe(
        res => {
          this.options = res.data.teams;
          console.log(this.options)
        },
        error => {
          this.errorMessage = 'Team already joined';
          this.result = true;
        }
      )
    });
  }

  exit(): void {
    this.dialogRef.close();
  }

  join() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      this.result = false;
      this.tournamentService.getConfig().subscribe(config => {
        this.tournamentService.joinTournament(config.apiURL, this.form.get('code').value, this.form.get('team').value).subscribe(
          res => {
            this.dialogRef.close({success: true});
          },
          error => {
            this.errorMessage = 'Wrong code';
            this.result = true;
          }
        )
      });
    }
  }

}
