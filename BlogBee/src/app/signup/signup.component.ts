import { Component, Injector, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
import { UserData } from '../user-data';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;
  mismatch:number = 0;
  constructor(private formbuilder:FormBuilder, private accService: AccountService,private router:Router) {}

  ngOnInit(): void {
    this.signupForm = this.formbuilder.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required],
      rpassword:['',Validators.required]
    })
  }

  signUp(){
    if(this.signupForm.value.password==this.signupForm.value.rpassword)
      {
        this.mismatch=0;
        this.accService.signUp(this.signupForm.value).subscribe(res=>{
          if(res==true){
            alert("Signup Successful. You can Signin now!!");
            this.router.navigate(['signin']);
          }
          else{
            this.signupForm.reset();
            alert("User Name or Email already used by an account");
          }
          
        },err=>{
          alert("Something went wrong");
        }) 
      }
  
      else
      {
        this.mismatch = 1;
      }

  }
 
}
