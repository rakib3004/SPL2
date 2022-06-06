import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private accService:AccountService,private router:Router) { }

  logInfo = this.accService.getLogInfo();

  success: boolean=false;

  loginButtonAction(){
    console.log(this.logInfo);
    this.accService.loginValidation();
  }

  signUp(){
    this.router.navigate(['signup']);
  }
 
  ngOnInit(): void {
    
  }

}
