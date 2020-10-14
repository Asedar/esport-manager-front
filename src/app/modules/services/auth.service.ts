import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { LocalStorageService } from './local-storage.service';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
    private storageService: LocalStorageService,
    private router: Router) { }

  private configUrl = 'assets/config/config.json';
  private jwtHelper = new JwtHelperService();

  public login(form: FormGroup, URL: string): Observable<any> {
    console.log(form)
    const body = {
      "email": form.get('email').value,
      "password": form.get('password').value
    }

    return this.http.post(URL + 'auth', body)
      .pipe(tap(
        res => {
          this.storageService.setUserToken(res.data.accessToken, form.get('rememberMe').value)
        }
      ));
  }

  public register() {
    
  }

  public checkNickAvailability(URL: string, nick: string) {
    const body = {
      "nick": nick
    }
    return this.http.post(URL + 'users/nick', body);
  }

  public checkEmailAvailability(URL: string, email: string) {
    const body = {
      "email": email
    }
    return this.http.post(URL + 'users/email', body);
  }

  public logout() {
    this.storageService.logout();
    this.router.navigate(['/home']);
  }

  public isUserLogedIn() {
    const userToken = this.storageService.getUserToken();
    if(!userToken || this.jwtHelper.isTokenExpired(userToken)) {
      return false;
    } 
    else {
      return true;
    }
  }

  public getConfig(): Observable<any>{
    return this.http.get(this.configUrl);
  }

}
