import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user-data';
import { LogInfo } from './log-info';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient) { }

  userData = new UserData();
  logInfo = new LogInfo();

  getUserData(){
    return this.userData;
  }

  getLogInfo(){
    return this.logInfo;
  }

  //get all data
  apiUrl = 'http://localhost:3000/userInfo';


  saveUserData(){
    this._http.post(`${this.apiUrl}`,this.userData);
  }

  loginValidation(){
    console.log(this.logInfo);
    this._http.post(this.apiUrl, this.logInfo).subscribe(data => {
      console.log(data);
    });
  }

  getAllData(){
    return this._http.get(`${this.apiUrl}`);
  }

}
