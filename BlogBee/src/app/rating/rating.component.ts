import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../account.service';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  starRating:Array<number> | any;


  constructor(private router:Router,private blogService:BlogService,private accService:AccountService) { 
    
  
  }




 ratingInfo = {
    videoId:"",
    userNo:0,
    timestamp:"",
    rating:0
  };

  addToRatingData(){
    this.ratingInfo.timestamp = String(Date.now());
    this.ratingInfo.userNo = this.accService.currentUserNo;
    this.ratingInfo.rating = this.starRating;
    this.ratingInfo.videoId = this.blogService.ratingVideoId;
    //console.log(this.ratingInfo);
    this.blogService.addNewRating(this.ratingInfo).subscribe(res=>{
      
    });
    this.router.navigateByUrl('');
  }

 
  ngOnInit(): void {
  }

 

}
