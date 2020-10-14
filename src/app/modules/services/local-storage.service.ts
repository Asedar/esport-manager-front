import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  getUserToken(): string {
    return sessionStorage.getItem('userToken') || localStorage.getItem('userToken');
  }

  setUserToken(token: string, rememberMe: boolean) {
    if(rememberMe) {
      localStorage.setItem('userToken', token);
    }
    else {
      sessionStorage.setItem('userToken', token);
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    sessionStorage.removeItem('userToken');
  }
}
