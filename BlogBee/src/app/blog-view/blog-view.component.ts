import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent{

  blogs:Blog[] = [];
  tags: any = ['Politics', 'Science', 'Religion'];
  text: string = "";


  getRandomBootstrapClass(): string {
    const bootstrapClasses = ['badge-primary', 'badge-danger', 'badge-success'];
    const randomIndex = Math.floor(Math.random() * bootstrapClasses.length);
    return bootstrapClasses[randomIndex];
  }

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    this.blogService.showBlog().subscribe(res => {
        this.blogs = res as Blog [];
        console.log(this.blogs);
        this.text = this.blogs[0].text;
      },
    );

    // this.blogService.getBlogTags(this.text).subscribe(res => {
    //   this.tags = res as Array<any>;
    // },

 
  }
}
