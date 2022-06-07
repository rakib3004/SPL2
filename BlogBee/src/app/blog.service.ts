import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { Observable } from 'rxjs';
import { __await } from 'tslib';
import { Blog } from './blog';
import { Video } from './video';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  blog: Blog = new Blog();
  video: Video = new Video()

  setVideo(video: Video){
    this.video = video
  }

  constructor(private _http:HttpClient) { }
  
  showBlog(){
    return this._http.get("http://localhost:3000/test/"+this.video.videoId+"/"+this.video.title);
  }

  getRecommendedItem(userId:any){
    return this._http.get("http://localhost:3000/recommendation/"+userId);
  }

  getBlogTags(blogText:any){
    return this._http.get('http://localhost:3000/classify/'+blogText);
  }

  getBlogToShow():Blog{
    return this.blog;
  }

}
