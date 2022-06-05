import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import {BlogService} from '../blog.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private videoService: VideoService, private blogService:BlogService ,private router: Router) {}
  videos: Video[] = [];
  recommendedVideos: Video[] = [];
  recommendedIndex  = [5, 7, 3, 9, 10, 34, 25, 36, 64,32,54];
  
  ngOnInit(): void {
    //this.videoService.addAllVideos();
    this.videoService.getVideos().subscribe(res=>{
    this.videos = res as Video[];

    this.recommendedIndex.forEach(index => {
      this.recommendedVideos.push(this.videos[index]);
    });
  })
}


  showBlog(targetVideo: Video) {
    this.blogService.setVideo(targetVideo);
    this.router.navigate(['blogView']);
  }
  
}