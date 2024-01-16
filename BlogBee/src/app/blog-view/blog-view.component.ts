import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { Tags } from '../tags';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent{

  blogs:Blog[] = [];
  tags = new Tags();

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    this.blogService.showBlog().subscribe(res => {
        this.blogs = res as Blog [];
        console.log(this.blogs);
      },
    );
  }
}
