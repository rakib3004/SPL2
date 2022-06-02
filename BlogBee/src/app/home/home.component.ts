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
  
  ngOnInit(): void {
      this.videoService.getVideos().subscribe(res=>{
      this.videos = res as Video[];
    })
  }


  showBlog(targetVideo: any) {
    this.blogService.showBlog(targetVideo);
    this.router.navigate(['blogView']);
  }
  
}