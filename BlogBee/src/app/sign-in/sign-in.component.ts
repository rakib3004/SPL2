import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountService } from '../account.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { User } from '../user';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  public signinForm !: FormGroup;
  incorrect = 0;
  user:User []=[];
  loggedIn = this.accService.loginObject;
  constructor(private formbuilder:FormBuilder,private accService:AccountService,private router:Router) { }

  ngOnInit(): void {
    if(this.accService.loginObject) {
      this.router.navigate(['']);
    }
    this.signinForm = this.formbuilder.group({
      userName:['',[Validators.required]],
      password:['',[Validators.required]]
    })
  }

  signIn(){
    console.log(this.signinForm.value)
    this.accService.signIn(this.signinForm.value).subscribe(res=>{
      console.log(res);
      if(res==false){
        this.incorrect = 1;
        //alert("Incorrect email or password");
      }
      else{
        this.user = res as User[];
        this.accService.currentUserNo = this.user[0].userNo;
        this.accService.loginObject = true;
        this.router.navigate(['']);
      }
    })
  }

}