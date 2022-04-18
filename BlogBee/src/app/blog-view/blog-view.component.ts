import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent implements OnInit {
  constructor() {}

  getBlog = JSON.parse('{"id": "KN5Bjh54uB8", "text": "Our environments are filled with information. ng study, his experimental design was revolutionary 21 years old to drink alcohol but only 18 Wall Street regulations, or Obamacare, or if there are any limits on when, where, and nd probably the most important, have you"}')
  extraBlog = JSON.parse('{"id": "KN5Bjh54uB8", "text": "Our environments are filled with information. ng study, his experimental design was revolutionary 21 years old to drink alcohol but only 18 Wall Street regulations, or Obamacare, or if there are any limits on when, where, and nd probably the most important, have you"}')

  blogId=this.getBlog.id;
  blogText=this.getBlog.text;


  ngOnInit(): void {}
}
