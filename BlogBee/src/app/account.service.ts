import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserData } from './user-data';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _http:HttpClient) { }

  userData = new UserData();

  getUserData(){
    return this.userData;
  }

  //get all data
  apiUrl = 'http://localhost:3000/userInfo';


  saveUserData(){
    this._http.post(`${this.apiUrl}`,this.userData);
  }

  getAllData(){
    return this._http.get(`${this.apiUrl}`);
  }

}
