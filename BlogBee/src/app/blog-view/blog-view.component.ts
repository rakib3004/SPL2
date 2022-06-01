import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';
import blog from './Blog.json';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent{

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {}
  blogTitle:String = this.blogService.blogTitle;
  blogText: String = this.blogService.blogText;

  getBlog: { id: String; title: String; text: Text } = blog;

  
}
