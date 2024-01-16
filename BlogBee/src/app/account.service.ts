import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LogInfo } from './log-info';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient,private router:Router) { }

  userData = new UserData();
  logInfo = new LogInfo();
  loginObject=false;
  currentUserNo = 5;

  getUserData(){
    return this.userData;
  }

  getLogInfo(){
    return this.logInfo;
  }

  //get all data
  apiUrl = 'http://localhost:3000';

  signUp(signUpInfo:any){
    return this._http.post(this.apiUrl+'/signup',signUpInfo);
  }

  signIn(signinInfo:any){
    return this._http.post(this.apiUrl+'/signin', signinInfo);
  }

  // getAllData(){
  //   return this._http.get(`${this.apiUrl}/`);
  // }

}