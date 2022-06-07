import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from '../video';
import { VideoService } from '../video.service';
import { AccountService } from '../account.service';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-favourite-list',
  templateUrl: './favourite-list.component.html',
  styleUrls: ['./favourite-list.component.css']
})
export class FavouriteListComponent implements OnInit {

  constructor(private router: Router, private accService:AccountService, private blogService:BlogService) {}
  favVideo: Video[] =[]

  ngOnInit(): void {
    this.blogService.getFavouritelist(this.accService.currentUserNo).subscribe(Data=>{
      this.favVideo = Data as Video[];
    },err=>{console.log(err)})
  }

  showBlog(targetVideo: Video) {
    this.blogService.setVideo(targetVideo);
    this.router.navigate(['blogView']);
  }


  tempFav = {
    videoId: "",
    userNo: 0
  }

  index:number=-1;
  removeFromFavouriteList(videoId:string){
    
    this.index = this.favVideo.findIndex((object) => {
      return object.videoId === videoId;
    });
    if (this.index !== -1) {
      this.favVideo.splice(this.index, 1);
    }
    
    this.tempFav.videoId = videoId;
    this.tempFav.userNo= this.accService.currentUserNo;

    this.blogService.removeFromFavouriteList(this.tempFav).subscribe(data=>{
      console.log("Removed");
    },err=>{console.log(err)})
    this.router.navigate(['favList']);
  }

  ratingButton(videoId:any){
    this.blogService.ratingVideoId = videoId;
    this.router.navigate(['rating']);
  }
}