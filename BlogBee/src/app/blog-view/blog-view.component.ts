import { Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
})
export class BlogViewComponent{

  blog: Blog = new Blog();
  
  title:String = this.blog.title;
  text:String = this.blog.text;
  
  //title:String = this.blogService.getBlogToShow().title;
  //text: String = this.blogService.getBlogToShow().text;

  constructor(private blogService:BlogService) {
    this.blog = this.blogService.getBlogToShow();
    console.log("This is from blog-view constructior: ");
    console.log(this.blog);
  }
  

  ngOnInit(): void {
    
  }
  
}
