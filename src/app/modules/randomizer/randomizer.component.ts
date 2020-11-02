import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { RandomizerDialogComponent } from './components/randomizer-dialog/randomizer-dialog.component';
import { Player } from './models/player.model';
import { RandomizerService } from './services/randomizer.service';

@Component({
  selector: 'app-randomizer',
  templateUrl: './randomizer.component.html',
  styleUrls: ['./randomizer.component.css']
})
export class RandomizerComponent implements OnInit {

  constructor(public dialog: MatDialog, private randomizeService: RandomizerService) { }

  players: Player[];
  shouldBeRendered: boolean;
  gameType = 'MOBA';
  playerInputs: FormGroup;
  optionsHidden = true;

  openDialog(): void {
    this.optionsHidden = false;
    const dialogRef = this.dialog.open(RandomizerDialogComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.gameType = result.gameType;
        this.players = [];
        let playerFormTemplate = {};
        const numberOfPlayers = this.gameType == 'OTHER' ? result.numberOfPlayers : 5
        for(let i = 0; i < numberOfPlayers * 2; i++) {
          this.players.push(new Player());
          let playerControlTemplate = {input: new FormControl('', Validators.required)};
          if(this.gameType === 'MOBA') {
            playerControlTemplate['position'] = new FormControl('Top', Validators.required);
            playerControlTemplate['randomizeType'] = new FormControl('1', Validators.required);
          }
          playerFormTemplate['player' + i] = new FormGroup(playerControlTemplate);
        }
        this.playerInputs = new FormGroup(playerFormTemplate);
      }
      this.optionsHidden = true;
    });
  }

  randomize() {
   if(this.playerInputs.valid) {
      Object.keys(this.playerInputs.controls).forEach((key, index) => {
        this.players[index].nick = (this.playerInputs.controls[key] as FormGroup).get('input').value;
        if(this.gameType === 'MOBA') {
          this.players[index].randomizeType = (this.playerInputs.controls[key] as FormGroup).get('randomizeType').value;
          this.players[index].position = (this.playerInputs.controls[key] as FormGroup).get('position').value;
        }
      });
      let team1 = [];
      let team2 = []
      this.randomizeService.randomize(this.players, team1, team2);
    }
  }

  ngOnInit(): void {
    this.openDialog();
  }

}
