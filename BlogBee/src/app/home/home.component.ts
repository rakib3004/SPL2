import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import {BlogService} from '../blog.service';
import { AccountService } from '../account.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})

export class HomeComponent implements OnInit {
  constructor(private accService: AccountService, private videoService: VideoService, private blogService:BlogService ,private router: Router) {}
  videos: Video[] = [];
  userId:number = 10;
  recommendedVideos: Video[] = [];
  recommendedIndex: number[] = [];
  
  ngOnInit(): void {
    //this.videoService.addAllVideos();
    this.videoService.getVideos().subscribe(res=>{
    this.videos = res as Video[];
  })


  this.blogService.getRecommendedItem(this.accService.currentUserId).subscribe(res=>{
    this.recommendedIndex = res as Array<number>;
    this.recommendedIndex.forEach(index => {
      if(index<64)
      this.recommendedVideos.push(this.videos[index]);
    });
  })  
}


  showBlog(targetVideo: Video) {
    this.blogService.setVideo(targetVideo);
    this.router.navigate(['blogView']);
  }
  
}