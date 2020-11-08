import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private http: HttpClient) { }

  private configUrl = 'assets/config/config.json';

  public getMyTeams(URL: string): Observable<any> {
    return this.http.get(URL + 'teams');
  }

  public joinTeam(URL: string, joinCode: string): Observable<any> {
    return this.http.patch(URL + 'teams/join', {joinCode: joinCode});
  }

  public createTeam(URL: string, name: string) {
    return this.http.post(URL + 'teams', {name: name});
  }

  public getConfig(): Observable<any>{
    return this.http.get(this.configUrl);
  }
}
