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
  ratingVideoId = "";

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
    console.log(ratingInfo);
    return this._http.post("http://localhost:3000/rating",ratingInfo);
  }

  getBlogToShow():Blog{
    return this.blog;
  }

  getFavouritelist(userNo:number){
    return this._http.get("http://localhost:3000/favouriteList/"+userNo);
  }

  addToFavouriteList(favVideo:any){
   return this._http.post("http://localhost:3000/favourite",favVideo);
  }

  removeFromFavouriteList(favVideo:any){
    console.log(favVideo);
    return this._http.put("http://localhost:3000/remove",favVideo);
   }

}
