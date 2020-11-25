import { Component, OnInit } from '@angular/core';
import { Team } from './models/team.model';
import { TeamService } from './services/team.service';
import { Deserialize } from 'cerialize';
import { MatDialog } from '@angular/material/dialog';
import { TeamJoinComponent } from './components/team-join/team-join.component';
import { LocalStorageService } from 'src/app/services/local-storage.service';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { TeamDetailsComponent } from './components/team-details/team-details.component';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {

  constructor(private teamService: TeamService, public dialog: MatDialog, private localStorage: LocalStorageService, private spinner: NgxSpinnerService) { }

  teams: Team[] = [];

  ngOnInit(): void {
    this.loadTeams();
  }

  loadTeams() {
    this.spinner.show();
    this.teamService.getConfig().subscribe(config => {
      this.teamService.getMyTeams(config.apiURL).subscribe(teams => {
        this.teams = [];
        teams.data.teams.forEach(team => {
          this.teams.push(Deserialize(team, Team));
        });

        const playerID = this.localStorage.getUserID()
        this.teams.forEach(team => {
          if(team.captain._id == playerID) {
            team.isCaptain = true;
          }
        });
        this.spinner.hide();
      })
    })
  }

  joinTeam() {
    const dialogRef = this.dialog.open(TeamJoinComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTeams();
      }
    });
  }

  createTeam() {
    const dialogRef = this.dialog.open(TeamCreateComponent, { disableClose: true });

    dialogRef.afterClosed().subscribe(result => {
      if(result) {
        this.loadTeams();
      }
    });
  }

  teamDetails(team: Team) {
    const dialogRef = this.dialog.open(TeamDetailsComponent, { disableClose: true, data: {team: team} });
  }
}
