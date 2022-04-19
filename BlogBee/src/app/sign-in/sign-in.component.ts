import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from '../account.service';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private accService:AccountService) { }

  logInfo = this.accService.getLogInfo();

  success: boolean=false;

  loginButtonAction(){
    console.log(this.logInfo);
    this.success = this.accService.loginValidation();
  }
 
  ngOnInit(): void {
    
  }

}
