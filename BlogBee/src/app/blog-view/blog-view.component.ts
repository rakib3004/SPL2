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

  blogs: Blog[] = [];


  constructor(private blogService:BlogService) {}

  tags = new Tags();

  ngOnInit(): void {
    this.blogService.showBlog().subscribe((res: any) => {
        this.blogs = res as Blog[];
        this.blogService.getBlogTags(this.blogs[0].text).subscribe(tagsRes=>{
          this.tags = tagsRes as Tags;
        })
      },
        (err) => console.log('error')
    )
  }
}
