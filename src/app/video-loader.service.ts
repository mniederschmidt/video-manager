import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Video } from './types';

const API_URL = 'https://api.angularbootcamp.com';

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos')
      .pipe(
        // map(videos => videos.slice(0, 3)),
        map(videos => videos.map(video => {
          // video.title = video.title.toUpperCase();
          // return video;
          return {
            ...video,
            title: video.title.toUpperCase()
          };
        })),
        tap(videos => console.log('videos: ', videos))
      );
  }
}
