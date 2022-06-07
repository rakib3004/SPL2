import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserData } from './user-data';
import { LogInfo } from './log-info';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient,private router:Router) { }

  userData = new UserData();
  logInfo = new LogInfo();
  loginObject=false;
  currentUserId = 17;

  getUserData(){
    return this.userData;
  }

  getLogInfo(){
    return this.logInfo;
  }

  //get all data
  apiUrl = 'http://localhost:3000/login';

  signUp(signUpInfo:any){
    return this._http.post('http://localhost:3000/signupUsers',signUpInfo);
  }

  signIn(signinInfo:any){
    return this._http.post(this.apiUrl, signinInfo);
  }

  getAllData(){
    return this._http.get(`${this.apiUrl}`);
  }

}
