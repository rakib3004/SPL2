import { Injectable } from '@angular/core';
import {HttpHeaders} from '@angular/common/http';
import {Video} from './video';



 
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpHeaders) { }


  getVideos(){
    return this.http.get('http://localhost:3000/api/videos');
   
  }

  postVideo(newVideo: Video){
    var headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.append('http://localhost:3000/api/video', "videos");
  }
}
