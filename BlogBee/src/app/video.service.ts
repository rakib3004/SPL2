import { Injectable } from '@angular/core';
import {Video} from './video';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, map, Observable, throwError } from 'rxjs';


 
@Injectable({
  providedIn: 'root'
})
export class VideoService {




  videos: Video[]=[

{ videoID:"Y86abolKENE", videoTitle:"2020 Mac Mini UNBOXING and REVIEW!" , videoTopic:"Electronics" },
{ videoID:"C118ADYpEqo", videoTitle:"Diversity of Bodies & Sizes (but mostly crabs): Crash Course Zoology #3" , videoTopic:"Windows" },
{ videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
{ videoID:"OmYVHWJf590", videoTitle:"Merry and gesus explained" , videoTopic:"Electronics" },
{ videoID:"mYhy7eaazIk", videoTitle:"Telescope" , videoTopic:"Medical Science" },
{ videoID:"OmYVHWJf590", videoTitle:"Merry and gesus explained" , videoTopic:"Electronics" },
{ videoID:"4x6zzQcMT3w", videoTitle:"Mysterious Nation religion" , videoTopic:"Gun Crime" },
{ videoID:"qf49ZFIIGlk", videoTitle:"Early Computing: Crash" , videoTopic:"Gun Crime" },
{ videoID:"qf49ZFIIGlk", videoTitle:"Early Computing: Crash" , videoTopic:"Gun Crime" },
{ videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
{ videoID:"veMFCFyOwFI", videoTitle:"The Middle East's cold war, explained" , videoTopic:"IBM" },
{ videoID:"gQGWqA22s5s", videoTitle:"Biomedicine: Crash Course History of Science #34" , videoTopic:"Electronics" },
{ videoID:"mdOJ717PKRc", videoTitle:"How Motorcycles Work - The Basics" , videoTopic:"Gun Crime" },
{ videoID:"l128tW1H5a8", videoTitle:"Urinary System, Part 1: Crash Course A&P #38" , videoTopic:"Hockey" },
{ videoID:"wOclF9eP5uM", videoTitle:"The Age of Exploration: Crash Course European History #4" , videoTopic:"MiddleEast" },
{ videoID:"gQGWqA22s5s", videoTitle:"Biomedicine: Crash Course History of Science #34" , videoTopic:"Electronics" },
{ videoID:"XjgfnS7qKCI", videoTitle:"Five reasons the Middle East is in crisis - Newsnight" , videoTopic:"Religion" },
{ videoID:"jAhjPd4uNFY", videoTitle:"Genetic Engineering" , videoTopic:"Politics" },
{ videoID:"O5nskjZ_GoI", videoTitle:"Course Computer Science #1" , videoTopic:"Gun Crime" },
{ videoID:"aJKkUFR4eDA", videoTitle:"How & What Animals Eat: Crash Course Zoology #4" , videoTopic:"Politics" },
{ videoID:"lrk4oY7UxpQ", videoTitle:"Introduction: Crash Course U.S. Government and Politics" , videoTopic:"Baseball" },
{ videoID:"mYhy7eaazIk", videoTitle:"Telescope" , videoTopic:"Medical Science" },
{ videoID:"kBpQiJt3MUQ", videoTitle:"Pre-Islamic history of the Middle East" , videoTopic:"Mac" },
{ videoID:"6aMW5mOKxB8", videoTitle:"history of hockey game" , videoTopic:"Gun Crime" },
{ videoID:"tecocKSclwc", videoTitle:"Florence and the Renaissance: Crash Course European History #2" , videoTopic:"Motorcycles" },
{ videoID:"_r9kSA3s2fQ", videoTitle:"Brainy & Brainless Animals: Crash Course Zoology #5" , videoTopic:"Autos" },
  ];

  getVideos() : Video[]{
    return this.videos;
  }

  REST_API: string = 'http://localhost:3000/';

  constructor(private httpClient: HttpClient) { }


  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  // Add
  AddUser(data: Video): Observable<any> {
    let API_URL = `${this.REST_API}/add-video`;
    return this.httpClient.post(API_URL, data)
      .pipe(
        catchError(this.handleError)
      )
  }
  // Get all objects
  GetUsers() {
    return this.httpClient.get(`${this.REST_API}/videos`);
  }
  // Get single object
  GetUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/video/${id}`;
    return this.httpClient.get(API_URL, { headers: this.httpHeaders })
      .pipe(map((res: any) => {
          return res || {}
        }),
        catchError(this.handleError)
      )
  }
  // Update
  updateUser(id:any, data:any): Observable<any> {
    let API_URL = `${this.REST_API}/update-video/${id}`;
    return this.httpClient.put(API_URL, data, { headers: this.httpHeaders })
      .pipe(
        catchError(this.handleError)
      )
  }
  // Delete
  deleteUser(id:any): Observable<any> {
    let API_URL = `${this.REST_API}/delete-video/${id}`;
    return this.httpClient.delete(API_URL, { headers: this.httpHeaders}).pipe(
        catchError(this.handleError)
      )
  }
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
