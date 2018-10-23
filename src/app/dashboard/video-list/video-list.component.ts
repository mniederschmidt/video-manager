import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';
import { VideoLoaderService } from '../../video-loader.service';

@Component({
  selector: 'vm-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  videos: Observable<Video[]>;
  selectedVideoId: string | undefined;

  constructor(svc: VideoLoaderService) {
    // this next line returns an observable - subscribe with async pipe
    this.videos = svc.loadVideos();
    // svc.loadVideos()
    //   .subscribe((data: videos => this.videos = videos);
  }

  ngOnInit() {
  }

  pickVideo(video: any) {
    this.selectedVideoId = video.id;
  }

}
