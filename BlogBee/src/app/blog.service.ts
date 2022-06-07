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

  getBlogTags(){
    return this._http.get("http://localhost:3000/classify");
  }

  addNewRating(ratingInfo:any){
    this._http.post("http://localhost:3000/rating",ratingInfo);
  }

  getBlogToShow():Blog{
    return this.blog;
  }

  addToFavouriteList(favVideo:any){
    console.log(favVideo);
    this._http.post("http://localhost:3000/favourite",favVideo);
  }

}
