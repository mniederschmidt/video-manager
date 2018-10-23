import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';
import { VideoLoaderService } from '../../video-loader.service';


@Component({
  selector: 'vm-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  videos: Observable<Video[]>;

  constructor(svc: VideoLoaderService) {
    // this next line returns an observable - subscribe with
    this.videos = svc.loadVideos();
    // svc.loadVideos()
    //   .subscribe((data: videos => this.videos = videos);
  }

  ngOnInit() {
  }

}
