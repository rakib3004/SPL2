import { Component, OnInit } from '@angular/core';
import {VideoService} from '../video.service';

import {Video} from '../video';


@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css'],
  providers: [VideoService]
})
export class VideosComponent implements OnInit {

  videos:Video[]=[];
  video: Video = new Video;


  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    //this.videoService.getVideos();
  }

}
