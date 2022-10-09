import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TournamentService } from '../../../services/tournament.service';

export interface DialogData {
  id: string;
  type: string;
}

@Component({
  selector: 'app-tournament-alert',
  templateUrl: './tournament-alert.component.html',
  styleUrls: ['./tournament-alert.component.css']
})
export class TournamentAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData, public dialogRef: MatDialogRef<TournamentAlertComponent>, private trnService: TournamentService) { }

  ngOnInit(): void {
  }

  exit(): void {
    this.dialogRef.close();
  }

  confirm() {
    this.trnService.getConfig().subscribe(config => {
      if(this.data.type == 'create') {
        this.trnService.createBracket(config.apiURL, this.data.id).subscribe(
          (res: any) => {
            this.dialogRef.close({success: true});
          },
          error => {
            this.dialogRef.close();
          }
        )
      }
      else if(this.data.type == 'end') {
        this.trnService.endTournament(config.apiURL, this.data.id).subscribe(
          (res: any) => {
            this.dialogRef.close({success: true});
          },
          error => {
            this.dialogRef.close();
          }
        )
      }
    });
  }
}
