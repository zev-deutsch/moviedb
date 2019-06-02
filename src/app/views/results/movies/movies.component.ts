import { Component, OnInit } from '@angular/core';
import {MoviedbService} from '../../../models/moviedb.service';
import {ActivatedRoute} from '@angular/router';
import {Movie} from '../../../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {
  query: string;
  movies: Movie[];
  constructor(private moviedb: MoviedbService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.getQuery();
    this.SearchMovie();
  }

  getQuery() {
    this.route.paramMap.subscribe((param) => {
      this.query = param.get('search');
    });
  }

  SearchMovie() {
    this.moviedb.movieSearch(this.query).subscribe( results => {
      this.movies = [];
      results.map((res) => {
        this.movies.push(new Movie(res));
      })
    });
  }
}
