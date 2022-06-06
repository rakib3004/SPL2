import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SignupComponent } from './signup/signup.component';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { VideosComponent } from './videos/videos.component';
import { FavouriteListComponent } from './favourite-list/favourite-list.component';
import {HttpClientModule} from '@angular/common/http';
import { AccountService } from './account.service';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignInComponent,
    NavbarComponent,
    SignupComponent,
    BlogViewComponent,
    VideosComponent,
    FavouriteListComponent,
    AboutUsComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
