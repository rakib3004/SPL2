import { Injectable } from '@angular/core';
import {Video} from './video';



 
@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() { }



  videos: Video[]=[

    { videoID:"YnOdULpV810", videoTitle:"How The U.S. Stole the Middle East" , videoTopic:"Gun Crime" },
    { videoID:"LvL3YXa0n2M", videoTitle:"Christianity 101 | National Geographic" , videoTopic:"CryptCryptMac" },
    { videoID:"OmYVHWJf590", videoTitle:"Merry and gesus explained" , videoTopic:"Electronics" },
    { videoID:"0ZvYJmzvgLo", videoTitle:"Middle East Explained - The Religions, Languages, and Ethnic Groups" , videoTopic:"CryptForsale" },
    { videoID:"KylcFO0HX84", videoTitle:"IBM: Let's create supply chains that have an appetite for performance" , videoTopic:"Christian" },
    { videoID:"gQGWqA22s5s", videoTitle:"Biomedicine: Crash Course History of Science #34" , videoTopic:"Electronics" },
    { videoID:"KN5Bjh54uB8", videoTitle:"How Animals Hear: Crash Course Zoology #7" , videoTopic:"Religion" },
    { videoID:"jAhjPd4uNFY", videoTitle:"Genetic Engineering" , videoTopic:"Politics" },
    { videoID:"6c4deRAhqcA", videoTitle:"Understanding your motorcycle's brake | Disc Brake" , videoTopic:"Gun Crime" },
    { videoID:"lrk4oY7UxpQ", videoTitle:"Introduction: Crash Course U.S. Government and Politics" , videoTopic:"Baseball" },
    { videoID:"kBpQiJt3MUQ", videoTitle:"Pre-Islamic history of the Middle East" , videoTopic:"Mac" },

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
