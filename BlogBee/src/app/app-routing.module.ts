import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BlogViewComponent } from './blog-view/blog-view.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'signin',component:SignInComponent},
  {path:'navbar',component:NavbarComponent},
  {path:'signup',component:SignupComponent},
  {path:'blogView',component:BlogViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
