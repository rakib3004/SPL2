import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import {BlogService} from '../blog.service';
import { AccountService } from '../account.service';
import { timestamp } from 'rxjs';

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


  this.blogService.getRecommendedItem(this.accService.currentUserNo).subscribe(res=>{
    this.recommendedIndex = res as Array<number>;
    this.recommendedIndex.forEach(index => {
      if(index<64)
      this.recommendedVideos.push(this.videos[index]);
    });
  })  
}

 

  ratingButton(videoId:any){
    this.blogService.ratingVideoId = videoId;
    this.router.navigate(['rating']);
  }


  showBlog(targetVideo: Video) {
    this.blogService.setVideo(targetVideo);
    this.router.navigate(['blogView']);
  }


  tempFav = {
    videoId: "",
    userNo: 0
  }
  addToFavouriteButton(videoId:string){
    this.tempFav.videoId = videoId;
    this.tempFav.userNo= this.accService.currentUserNo;
    this.blogService.addToFavouriteList(this.tempFav);
  }

  
}