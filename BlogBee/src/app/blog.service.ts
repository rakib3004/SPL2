import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http:HttpClient) {}
  blogTitle:String = "";
  blogText:String = "";

  showBlog(targetId: any){
    this._http.get("http://localhost:3000/test/"+targetId).subscribe(data=>{
      const blog = JSON.stringify(data);
      console.log(data);
    });
  }
}
