import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { HomeComponent } from './home/home.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'signin', component: SignInComponent },
  { path: 'navbar', component: NavbarComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'blogView', component: BlogViewComponent },
  { path: 'favList', component: FavouriteListComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'history', component: HistoryComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
