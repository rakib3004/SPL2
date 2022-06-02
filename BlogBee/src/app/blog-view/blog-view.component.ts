import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent{

  blog: Blog[] = [];

  constructor(private blogService:BlogService) {}
  

  ngOnInit(): void {
    this.blogService.showBlog().subscribe(
      (res: any) => {
        this.blog = res as Blog[];
      },
        (err) => console.log('error')
    )
  }
  
}
