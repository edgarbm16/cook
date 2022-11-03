import { Injectable } from '@angular/core';
import { environment as ENV } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

export interface Registro {
  objectId?: string;
  emailVerified?: string;
  updateAt?: string;
  authData?: string;
  username?: string;
  createdAt?: string;
  password?: string;
  email?: string;
  phone?: string;
  token?: string;
  card?: number;
}


@Injectable({
  providedIn: 'root'
})

export class SignUpService {

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


  signUp(registro: Registro){
    return this.http.post(this.url, registro, {headers: this.header});
  }
}
