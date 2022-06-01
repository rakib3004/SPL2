import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  array: any = []

  constructor(private _http:HttpClient) {}

  showBlog(targetId: any){
    console.log("this is servce "+targetId);
    this._http.get("http://localhost:3000/test/"+targetId).subscribe(data=>{
      let array = data;
      console.log("This is Service after database respones ");
      console.log(array);
    })
  }
}
