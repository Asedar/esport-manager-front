import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TeamService } from '../../services/team.service';

@Component({
  selector: 'app-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.css']
})
export class TeamCreateComponent implements OnInit {

  constructor(private teamService: TeamService, public dialogRef: MatDialogRef<TeamCreateComponent>) { }

  ngOnInit(): void {
  }

  success = false;
  taken = false;
  code = '';
  form = new FormGroup({
    name: new FormControl('', Validators.required),
  })

  exit(): void {
    if(this.success) {
      this.dialogRef.close({success: true});
    }
    else {
      this.dialogRef.close();
    }
  }

  create() {
    if(this.form.valid) {
      this.success = false;
      this.taken = false;
      this.teamService.getConfig().subscribe(config => {
        this.teamService.createTeam(config.apiURL, this.form.get('name').value).subscribe(
          (res: any) => {
            this.success = true;
            this.code = res.message;
          },
          error => {
            if(error.errors[0].param == 'name') {
              this.taken = true;
            }
          }
        )
      });
    }
    
  }
}
