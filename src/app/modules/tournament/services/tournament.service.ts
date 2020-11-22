import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TournamentService {

  constructor(private http: HttpClient) { }

  private configUrl = 'assets/config/config.json';

  public getMyTournaments(URL: string): Observable<any> {
    return this.http.get(URL + 'tournaments');
  }

  public createTournament(URL: string, data: any): Observable<any> {
    return this.http.post(URL + 'tournaments', data);
  }

  public getConfig(): Observable<any>{
    return this.http.get(this.configUrl);
  }

  public joinTournament(URL: string, joinCode: string, teamID: string): Observable<any> {
    return this.http.patch(URL + 'tournaments/join', {joinCode: joinCode, teamID: teamID});
  }

  public getSingleTournament(URL: string, id: string): Observable<any> {
    return this.http.get(URL + 'tournaments/' + id);
  }

  public setMatchScore(URL: string, id: string, winner: number): Observable<any> {
    return this.http.patch(URL + 'matches/' + id, {winner: winner});
  }

  public getMyTeams(URL: string): Observable<any> {
    return this.http.get(URL + 'teams/');
  }

  public createBracket(URL: string, id: string, ): Observable<any> {
    return this.http.patch(URL + 'tournaments/createBracket/' + id, {});
  }

  public endTournament(URL: string, id: string, ): Observable<any> {
    return this.http.patch(URL + 'tournaments/endTournament/' + id, {});
  }

  public setBracketScore(URL: string, tournamentID: string,  id: string, winner: any): Observable<any> {
    return this.http.patch(URL + 'tournaments/setScore', {tournamentID: tournamentID, matchWinner: winner, matchID: id});
  }
}
