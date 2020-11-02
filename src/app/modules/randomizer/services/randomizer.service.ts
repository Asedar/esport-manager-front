import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Player } from '../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class RandomizerService {

  public randomize(players: Player[], team1: Player[], team2: Player[]){
    team1 = [...players];
    team2 = [];
    let positions = ["Top", "Top", "Jungle", "Jungle", "Mid", "Mid", "Bottom", "Bottom", "Support", "Support"];
    let roles = ["Top", "Jungle", "Mid", "Bottom", "Support"];

    players.forEach((player: Player) => {
      if(player.randomizeType == 3) {
        if(positions.indexOf(player.position) != -1) {
          player.assignedPosition = player.position;
          positions.splice(positions.indexOf(player.position), 1);
        }
      }
    })

    for (let i = team1.length - 1; i > 0; i--) 
    {
      let j = Math.floor(Math.random() * (i + 1));
      let temp = team1[i];
      team1[i] = team1[j];
      team1[j] = temp;
    }

    for(let y = 0; y < 10; y++)
    {
      if(!team1[y].assignedPosition)
      {   
        let rand = Math.floor(Math.random() * positions.length);
        team1[y].assignedPosition = positions[rand];
        team1[y].previousPosition = positions[rand];
        positions.splice(rand, 1);
      }
    }
    this.validatePositions(team1);  

    for(let g = 0; g < 5; g++)
    {
      let playerIndex = team1.map(item => {return item.assignedPosition}).indexOf(roles[g])
      team2.push(team1[playerIndex]);
      team1.splice(playerIndex, 1);
    }
    players.forEach((player: Player) =>{
      player.previousPosition = player.assignedPosition;
    })
    console.log(team1);
    console.log(team2);
    console.log(players);
  }

  public rollAgain() {

  }

  private validatePositions(team: Player[]) {
    for(let x = 9; x >= 0; x--)
    {
      if(team[x].randomizeType != 3 && team[x].randomizeType == 2 && team[x].assignedPosition == team[x].position)
      {
        for(let y = 0; y < 10; y++)
        {
          if(team[y].randomizeType != 3 && team[y].assignedPosition != team[x].assignedPosition && (team[y].randomizeType != 3 || (team[y].randomizeType == 3 && team[y].position != team[x].assignedPosition)))
          {
            let temp = team[y].assignedPosition;
            team[y].assignedPosition = team[x].assignedPosition;
            team[x].assignedPosition = temp;
            break;
          }
        }
      }
    }
    for(let z = 0; z < 10; z++)
    {
      if(team[z].randomizeType == 2 && team[z].assignedPosition == team[z].position)
      {
        alert("It is impossible to assign positions in that way");
        break;
      }
    }
  }

  constructor() { }
}
