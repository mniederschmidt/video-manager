import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';

@Component({
  selector: 'vm-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  // @Input() videos: Video[];
  @Input() videos: Observable<Video[]>;

  selectedVideoId: string | undefined;

  constructor() {}

  ngOnInit() {
  }

  pickVideo(video: any) {
    console.log('*** pickVideo - video = ', video);
    this.selectedVideoId = video.id;
    console.log('this.selectedVideoId: ', this.selectedVideoId);
  }

}
