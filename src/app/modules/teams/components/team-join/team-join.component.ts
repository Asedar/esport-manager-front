import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-join',
  templateUrl: './team-join.component.html',
  styleUrls: ['./team-join.component.css']
})
export class TeamJoinComponent implements OnInit {

  constructor(private teamService: TeamService, public dialogRef: MatDialogRef<TeamJoinComponent>) { }

  ngOnInit(): void {
  }

  result = false;
  errorMessage = '';
  form = new FormGroup({
    code: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(8)]),
  })

  exit(): void {
    this.dialogRef.close();
  }

  join() {
    if(this.form.valid) {
      this.result = false;
      this.teamService.getConfig().subscribe(config => {
        this.teamService.joinTeam(config.apiURL, this.form.get('code').value).subscribe(
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
