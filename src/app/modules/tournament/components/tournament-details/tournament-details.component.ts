import { Component, OnInit } from '@angular/core';
import { TournamentService } from '../../services/tournament.service';
import { Tournament } from '../../models/tournament.model';
import { ActivatedRoute, Router } from '@angular/router';
import { Deserialize } from 'cerialize';
import * as Duel from 'duel'

@Component({
  selector: 'app-tournament-details',
  templateUrl: './tournament-details.component.html',
  styleUrls: ['./tournament-details.component.css']
})
export class TournamentDetailsComponent implements OnInit {

  constructor(private trnService: TournamentService, private route: ActivatedRoute, private router: Router) { }
  
  ngOnInit(): void {
    this.loadTournaments();
  }

  tournament: Tournament;
  loadTournaments() {
    this.trnService.getConfig().subscribe(config => {
      this.trnService.getSingleTournament(config.apiURL, this.route.snapshot.paramMap.get("id")).subscribe(data => {
        if(data.data) {
          this.tournament = Deserialize(data.data, Tournament);
        }
        else {
          this.router.navigateByUrl('/404')
        }
      })
    })
  }
}
