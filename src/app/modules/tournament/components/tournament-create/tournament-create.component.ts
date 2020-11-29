import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Team } from 'src/app/modules/teams/models/team.model';
import { TournamentService } from '../../services/tournament.service';

@Component({
  selector: 'app-tournament-create',
  templateUrl: './tournament-create.component.html',
  styleUrls: ['./tournament-create.component.css']
})
export class TournamentCreateComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<TournamentCreateComponent>, private trnService: TournamentService) { }

  ngOnInit(): void {
  }

  success = false;
  fail = false;
  code = '';
  numberOfPlayers = 5;
  numberOfTeams = 8;
  public date = new Date();
  form = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    game: new FormControl('', Validators.required),
    format: new FormControl('', Validators.required),
    date: new FormControl(new Date(new Date().getTime() + (24*60*60*1000)), Validators.required),
  });

  options = ['League of Legends', 'Rainbow 6 Siege', 'CS: GO', 'Smite', 'Starcraft 2', 'Dota 2', 'Other']

  exit(): void {
    if(this.success) {
      this.dialogRef.close({success: true});
    }
    else {
      this.dialogRef.close();
    }
  }

  create() {
    this.form.markAllAsTouched();
    if(this.form.valid) {
      const data = {
        name: this.form.get('name').value,
        description: this.form.get('description').value,
        game: this.form.get('game').value,
        format: this.form.get('format').value,
        playersInTeam: this.numberOfPlayers,
        maxTeams: this.numberOfTeams,
        date: this.form.get('date').value
      }
      this.trnService.getConfig().subscribe(config => {
        this.trnService.createTournament(config.apiURL, data).subscribe(
          (res: any) => {
            this.success = true;
            this.fail = false;
            this.code = res.message;
          },
          error => {
            this.fail = true;
          }
        )
      });
    }
  }

}
