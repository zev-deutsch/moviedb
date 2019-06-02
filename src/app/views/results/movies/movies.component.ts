import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';
import {Movie, Search} from '../../../models/movie';
import {Subject} from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query: Search;
  queryChanged = new Subject<Search>();
  movies: Movie[];
  constructor(private moviedb: MoviedbService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getQuery();
    this.SearchMovie();
  }
  // gets the search from the url
  getQuery() {
    this.route.paramMap.subscribe((param) => {
      this.query = new Search(param.get('search'));
      // the auto load is not working wet not sure why but i'll fegger it out soon
      this.queryChanged.subscribe(change => {
        this.query = change;
      });
    });
  }
  // searches the movie
  SearchMovie() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      this.movies = [];
      results.map((res) => {
        this.movies.push(new Movie(res));
      })
    });
  }
}
