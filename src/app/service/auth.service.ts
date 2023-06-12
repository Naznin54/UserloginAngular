import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Auth} from '../model/auth';
import { HttpClient } from '@angular/common/http'
// import { Auth } from '../model/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loginUrl: string='';
  signUpUrl: string='';


  constructor(private http : HttpClient) {
    this.loginUrl ="http://localhost:9192/auth/login";
    this.signUpUrl ="http://localhost:9192/auth/register";
   }
   login(user : Auth):Observable<any>{
    return this.http.post<any>(this.loginUrl,user);
   }
   signup(user : Auth):Observable<any>{
    return this.http.post<any>(this.signUpUrl,user);
   }
}
