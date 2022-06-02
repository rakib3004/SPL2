import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { __await } from 'tslib';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog: Blog = new Blog();

  constructor(private _http:HttpClient) { }
  
  showBlog(targetVideo: any){
    this._http.get("http://localhost:3000/test/"+targetVideo.videoId).subscribe(data=>{
      this.blog = data as Blog;
      console.log("This is from service file: ");
      console.log(this.blog);
    });
    console.log("After request ; ");
  }

  // showBlog(targetId: any){
  //   this._http.get("http://localhost:3000/test/"+targetId).subscribe(data=>{
  //     this.blog = data as Blog;
  //     console.log("This is form service file: ");
  //     console.log(this.blog);
  //   });
  // }

  getBlogToShow():Blog{
    console.log("This is from getBlogToShow functin : ");
    console.log(this.blog);
    return this.blog;
  }

}
