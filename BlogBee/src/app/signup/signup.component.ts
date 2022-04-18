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
  constructor(private accService: AccountService) {}

  userData = this.accService.getUserData();

  signUpButtonAction(){
    this.accService.saveUserData();
  }

  ngOnInit(): void {
  }

}
