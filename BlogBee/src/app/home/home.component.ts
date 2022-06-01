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
  videos: any = [];

  ngOnInit(): void {
      //this.videoService.addAllVideos();
      this.videoService.getVideos().subscribe(data=>{
      this.videos = data;
    })
  }


  showBlog(targetId: any) {
    this.blogService.showBlog(targetId);
    this.router.navigate(['blogView']);
  }
  
}