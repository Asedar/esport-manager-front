import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Team } from '../../models/team.model';

export interface DialogData {
  team: Team;
}

@Component({
  selector: 'app-team-details',
  templateUrl: './team-details.component.html',
  styleUrls: ['./team-details.component.css']
})
export class TeamDetailsComponent implements OnInit {

  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<TeamDetailsComponent>) { }

  ngOnInit(): void {
  }

  exit() {
    this.dialogRef.close();
  }

}
