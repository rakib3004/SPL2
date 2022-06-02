import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import blog from './Blog.json';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent{

  constructor(private blogService:BlogService) {}
  blog: Blog = new Blog();
  ngOnInit(): void {
    this.blog = this.blogService.getBlogToShow();
  }
  
}
