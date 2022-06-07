import { Component, OnInit } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog'

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


rating=0;
starCount=5;
ratingArr:boolean[]=[];

snackBarDuration=1000;

response=['Very poor',
          'Poor',
          'Neutral',
          'Good',
          'Excellent',
        ]

  constructor(private snackBar:MatSnackBar, private matDialog: MatDialog) { 
    
  this.ratingArr= Array(this.starCount).fill(false);
  
  }

 

  ngOnInit(): void {
  }

  returnStar(i: number){
    if(this.rating>=i+1){
      return 'star';
    }
    else{
      return 'star_border';
    }
  }

  onClick(i:number){
    this.rating=i+1;
    this.snackBar.open(this.response[i],'',{
      duration:this.snackBarDuration,
      panelClass: ['snack-bar']
    });

    
  }

}
