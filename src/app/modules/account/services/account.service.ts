import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  private configUrl = 'assets/config/config.json';

  public getMyAccount(URL: string): Observable<any> {
    return this.http.get(URL + 'users/me');
  }

  public updateUserData(URL: string, data: any): Observable<any> {
    return this.http.patch(URL + 'users', data);
  }

  public getConfig(): Observable<any>{
    return this.http.get(this.configUrl);
  }

}
