import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  constructor(private router:Router,private accService:AccountService) {}

  click = 0;
  loginSuccess=this.accService.loginObject;

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

  ngOnInit(): void {}
}
