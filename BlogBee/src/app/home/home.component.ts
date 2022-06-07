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
  userId:number = 40;
  recommendedVideos: Video[] = [];
  recommendedIndex: number[] = [];
  //recommendedIndex  = [38, 4, 9, 25, 1, 13, 58, 0, 6, 40, 19, 32, 24, 47, 3, 5, 48, 8, 31, 24, 23, 43, 36, 61, 16, 44];
  
  ngOnInit(): void {
    //this.videoService.addAllVideos();
    this.videoService.getVideos().subscribe(res=>{
    this.videos = res as Video[];
  })


  this.blogService.getRecommendedItem(this.userId).subscribe(res=>{
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