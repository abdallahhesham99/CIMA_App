import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private _HttpClient: HttpClient) {

  }
  getTrending(mediaType): Observable<any> {

    return this._HttpClient.get(`https://api.themoviedb.org/3/trending/${mediaType}/week?api_key=0325b3b650da04879aa2e4b404a13e74`);
  }
  getItemDetails(mediaType, id): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${id}?api_key=0325b3b650da04879aa2e4b404a13e74&language=en-US
    `)
  }
  getAll(mediaType, x): Observable<any> {
    return this._HttpClient.get(`https://api.themoviedb.org/3/${mediaType}/${x}?api_key=0325b3b650da04879aa2e4b404a13e74&language=en-US&page=1`)
  }
}
