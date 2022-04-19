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
  favVideo: Video[]=[] ;


  ngOnInit(): void {
    this.videos = this.videoService.getVideos();
    this.favVideo[0]=this.videos[4];
    this.favVideo[1]=this.videos[11];
    this.favVideo[2]=this.videos[5];
    this.favVideo[3]=this.videos[3];
    this.favVideo[4]=this.videos[0];
    this.favVideo[5]=this.videos[9];
  }
 

}
