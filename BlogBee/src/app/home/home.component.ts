import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private videoService: VideoService, private router: Router) {}
  videos: any = [];

  ngOnInit(): void {
      //this.videoService.addAllVideos();
      this.videoService.getVideos().subscribe(data=>{
      this.videos = data;
    })
  }

  VideoInfo = [];

  targetVideo = new Video();
  compileVideoToText(targetVideo: Video) {
    this.videoService.compileVideoToText(targetVideo);
    this.router.navigate(['blogView']);
  }
  
  showBlog(path: String) {}
  
}