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
  favVideoOne:Video | undefined;
  favVideoOne:Video | undefined;
  favVideoOne:Video | undefined;
  favVideoOne:Video | undefined;
  favVideoOne:Video | undefined;
  favVideoOne:Video | undefined;


  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
    favVideoOne=this.videos[0];
    favVideoTwo=this.videos[1];
    favVideoThree=this.videos[2];
    favVideoFour=this.videos[3];
    favVideoFive=this.videos[4];
    favVideoSix=this.videos[5];
  }
 

}
