import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  click=0;

  menuButtonClickEvent(){
     if(this.click==0) this.click=1;
     else this.click=0;
  }

  
  ngOnInit(): void {
  }

}
