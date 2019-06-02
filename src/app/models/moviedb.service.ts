import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {Search} from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviedbService {
  baseUrl = 'https://api.themoviedb.org/3/';
  apikey = '?api_key=9406ed0141baddd3f8169037803f4f2f';

  constructor(public http: HttpClient) { }

  // Fix this so it uses a custom datatype
  movieSearch(query: Search): Observable<any> {
    const url = this.baseUrl + 'search/movie' + this.apikey + '&query=' + query;
    return this.http.get(url).pipe(
      map(res => {
        return (res as any).results;
      })
    );
  }

  // Fix this so it uses a custom datatype
  fetchMovieById(mid: string): Observable<any> {
    const url = this.baseUrl + 'movie/' + mid + this.apikey;
    return this.http.get(url);
  }
}
