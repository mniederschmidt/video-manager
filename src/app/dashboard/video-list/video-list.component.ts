import { Component, EventEmitter, OnInit, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Video } from '../../types';

@Component({
  selector: 'vm-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})

export class VideoListComponent implements OnInit {
  @Input() videos: Video[];
  @Output() selectVideo = new EventEmitter<Video>();

  selectedVideoId: string;

  constructor() {}

  ngOnInit() {
  }

  pickVideo(video: Video) {
    this.selectedVideoId = video.id;
    this.selectVideo.emit(video);
  }

}
