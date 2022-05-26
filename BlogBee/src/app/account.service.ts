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

  loginObject=new Boolean();
  // loginObject=this.loginObject;

  getUserData(){
    return this.userData;
  }

  getLogInfo(){
    return this.logInfo;
  }

  //get all data
  apiUrl = 'http://localhost:3000/login';



  saveUserData(){
    this._http.post('http://localhost:3000/signup',this.userData).subscribe(data => {
      console.log(data);
    });
  }

  loginValidation(){
    console.log(this.logInfo);
    this._http.post(this.apiUrl, this.logInfo).subscribe(data => {
      if(JSON.stringify(data)=="[]") 
      {
        
        console.log("Invaid");
        alert('Incorrect password or user Name');
        this.logInfo.password='';
        this.logInfo.userName='';
        this.loginObject=false;
        this.router.navigateByUrl('signin');
        
      }
      else 
      {
        alert('Login Successful');
        this.loginObject=true;
        console.log("valid");
        this.router.navigateByUrl('');
      }
    });

    console.log(this.loginObject);
  }

  getAllData(){
    return this._http.get(`${this.apiUrl}`);
  }

}
