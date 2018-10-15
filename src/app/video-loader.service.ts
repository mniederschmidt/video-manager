import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

const API_URL = 'https://api.angularbootcamp.com';

export interface Video {
  title: string;
  author: string;
  id: string;
  viewDetails: ViewDetail[];
}

// I'm not totally sure this next one needs to be exported as well (?)
export interface ViewDetail {
  age: number;
  region: string;
  date: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoLoaderService {

  constructor(private http: HttpClient) { }

  loadVideos(): Observable<Video[]> {
    return this.http
      .get<Video[]>(API_URL + '/videos')
      .pipe(
        map(videos => videos.slice(0, 3)),
        tap(videos => console.log('videos: ', videos))
      );
  }
}
