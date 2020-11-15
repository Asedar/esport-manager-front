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

  
}