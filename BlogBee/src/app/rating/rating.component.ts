import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {


  starRating:Array<Number> | any;


  constructor(private router:Router) { 
    
  
  }

  returnToHome(){
    console.log(this.starRating)
    this.router.navigateByUrl('');
  }

 
  ngOnInit(): void {
  }

 

}
