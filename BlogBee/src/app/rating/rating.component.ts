import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


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

  constructor() { 
    
  
  }

 

  ngOnInit(): void {
  }

 

    
  

}
