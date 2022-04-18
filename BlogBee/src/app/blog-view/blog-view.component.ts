import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  constructor() {}

  getBlog = JSON.parse('{"id": "KN5Bjh54uB8", "text": "Our environments are filled with information. ng study, his experimental design was revolutionary"}')

  blogId=this.getBlog.id;
  blogText=this.getBlog.text;


  ngOnInit(): void {}
}
