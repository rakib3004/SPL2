import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router,public accService:AccountService) {}

  click = 1;
  loggedIn = this.accService.loginObject;

  menuButtonClickEvent() {
    if (this.click == 0) this.click = 1;
    else this.click = 0;
  }

  signin(){
    this.router.navigateByUrl('signin');
  }

  signup(){
    this.router.navigateByUrl('signup');
  }

  signout(){
    this.accService.loginObject = false;
    console.log(this.accService.loginObject);
    this.router.navigate(['#']);
  }


  ngOnInit(): void {}
}
