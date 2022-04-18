import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  constructor(private videoService: VideoService, private router: Router) {}
  videos: Video[] = [];
  favVideoOne=new Video() ;
  favVideoTwo=new Video() ;
  favVideoThree=new Video() ;
  favVideoFour=new Video() ;
  favVideoFive=new Video() ;
  favVideoSix=new Video() ;


  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
    this.favVideoOne=this.videos[4];
    this.favVideoTwo=this.videos[11];
    this.favVideoThree=this.videos[5];
    this.favVideoFour=this.videos[3];
    this.favVideoFive=this.videos[0];
    this.favVideoSix=this.videos[9];
  }
 

}
