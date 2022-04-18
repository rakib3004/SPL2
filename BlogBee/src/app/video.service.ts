import { Injectable } from '@angular/core';
import {Video} from './video';



 
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }



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

  /*
  getVideos(){
    return this.http.get('http://localhost:3000/api/videos');
   
  }

  addVideo(newVideo:string){

    var headers = new Headers();

    headers.append('Content-Type', 'application/json');
    return this.http.append('http://localhost:3000/api/video', newVideo);
  }


  
  deleteVideo(_id:string){

    var headers = new Headers();

    return this.http.delete('http://localhost:3000/api/video', _id);
  }
  */
}
