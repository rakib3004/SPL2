import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { UserData } from '../user-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor(private accService: AccountService,private router:Router) {}

  userData = this.accService.getUserData();
  mismatch:boolean = false;

  signUpButtonAction(){
    if(this.userData.password==this.userData.rpassword)
    {
      this.mismatch=false;
      this.accService.saveUserData();
      console.log(this.userData);
    }

    else
    {
      this.mismatch = true;
    }
  }

  signin(){
    this.router.navigateByUrl('signin');
  }

  ngOnInit(): void {
  }

}
