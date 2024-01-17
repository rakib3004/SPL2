import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Blog } from '../blog';
import { BlogService } from '../blog.service';
import { switchMap } from 'rxjs/operators';
import { Tag } from '../tag';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.css'],
  
})
export class BlogViewComponent{

  blogs:Blog[] = [];
  tags: Tag [] = [];
  text: string = "";


  getRandomBootstrapClass(): string {
    const bootstrapClasses = ['badge-primary', 'badge-danger', 'badge-success'];
    const randomIndex = Math.floor(Math.random() * bootstrapClasses.length);
    return bootstrapClasses[randomIndex];
  }

  constructor(private blogService:BlogService) {}

  ngOnInit(): void {
    // this.blogService.showBlog().subscribe(res => {
    //     this.blogs = res as Blog [];
    //     console.log(this.blogs);
    //     this.text = this.blogs[0].text;
    //   },
    // );

    this.blogService.showBlog().pipe(
      switchMap((res) => {
        this.blogs = res as Blog [];
        console.log(this.blogs);
        this.text = this.blogs[0].text;

    
        return this.blogService.getBlogTags(this.text);
      })
    ).subscribe((resTags ) => {
      console.log(resTags)
      this.tags = resTags as Tag [];

    },
    (error) => {
      console.error('Error in HTTP request:', error);
    }
    );

    // this.blogService.getBlogTags(this.text).subscribe(res => {
    //   this.tags = res as Array<any>;
    // },
  }

  transform(value: string): string {
    return value.replace(/[^\x00-\x7F]/g, '');
  }
}
