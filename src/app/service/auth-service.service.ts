import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface AuthLogin {
  email?: string;
  password?: string;
}

@Injectable({
  providedIn: 'root'
})

export class AuthServiceService {

  private url = ENV.API + 'users';
  private header = {
    "X-Parse-Application-Id": ENV.APP_ID,
    "X-parse-REST-API-Key": ENV.API_SECRET,
    "X-Parse-Revocable-Session": "1",
    "Content-Type": "application/json"
  }

  constructor(
    private http: HttpClient
  ) { }


  authService(authlogin: AuthLogin){
    return this.http.get();
  }
}

