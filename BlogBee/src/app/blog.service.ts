import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private _http:HttpClient) {}

  showBlog(targetId: any){
    console.log(targetId);
    this._http.get("",targetId);
  }
}
