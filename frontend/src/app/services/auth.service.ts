import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Auth} from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  selectedAuth: Auth;
  AuthArray: Auth[];

  readonly URL_API = 'http://localhost:3000/smartbudget/auth/signin?';

  constructor(private http: HttpClient) { 
     this.selectedAuth= new Auth();
  }
    postAuth(EnviarAuth: Auth){
    return this.http.post(this.URL_API, EnviarAuth);
  }
    
}
