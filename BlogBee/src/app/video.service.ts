import { Injectable } from '@angular/core';
import {Video} from './video';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';

 
@Injectable({
  providedIn: 'root'
})
export class VideoService {

      
  constructor(private _http: HttpClient) { }

  
  compileVideoToText(targetVideo: Video) {
    
  }
  

  // Get all videos
  getVideos(): Observable<any> {
    return this._http.get('http://localhost:3000/videoInfo');
 }


  // temporary function to add videos into database
  // addAllVideos() {
  //     //console.log(this.Videos);
  //     this._http.post('http://localhost:3000/insertRatings',this.users).subscribe(data=>{
  //       console.log(data);
  //     })
  // }
 
  
  // Error 
  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Handle client error
      errorMessage = error.error.message;
    } else {
      // Handle server error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}