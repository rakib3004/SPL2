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

  blogs:Blog[] = new Array();
  //blogs: Blog[] = [];
  tags = new Tags();

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    this.blogService.showBlog().subscribe((res: any) => {
        this.blogs = res as Blog[];
        console.log("showBlog");
      },
        (err) => console.log('error occured')
    );

    // this.blogService.getBlogTags().subscribe((tagsRes:any)=>{
    //   console.log("tags")
    //   console.log(tagsRes);
    //   this.tags = tagsRes as Tags;
    //   console.log(this.tags);
    // })
    
  }
}
