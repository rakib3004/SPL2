import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Blog } from './blog';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http:HttpClient) {}
  blog: Blog = new Blog();

  showBlog(targetId: any){
    this._http.get("http://localhost:3000/test/"+targetId).subscribe(data=>{
      this.blog = data as Blog;
      console.log(data);
    });
  }

  getBlogToShow():Blog{
    return this.blog;
  }

}
