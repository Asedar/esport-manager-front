import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RandomizerDialogComponent } from './components/randomizer-dialog/randomizer-dialog.component';
import { Player } from './models/player.model';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  players: Player[];
  shouldBeRendered: boolean;
  gameType = 'MOBA';
  playerInputs: FormGroup;

  openDialog(): void {
    const dialogRef = this.dialog.open(RandomizerDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.gameType = result.gameType;
        this.players = [];
        for(let i = 0; i < result.numberOfPlayers * 2; i++) {
          this.players.push(new Player());
        }
      }
    });
  }

  ngOnInit(): void {
    this.openDialog();
  }

}
