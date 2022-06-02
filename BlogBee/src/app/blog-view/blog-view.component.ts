import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent{

  blogs: Blog[] = [];

  constructor(private blogService:BlogService) {}
  

  ngOnInit(): void {
    this.blogService.showBlog().subscribe(
      (res: any) => {
        this.blogs = res as Blog[];
      },
        (err) => console.log('error')
    )
  }
  
}
