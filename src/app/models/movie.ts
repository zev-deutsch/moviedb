export class Movie {
  backdropPath: string;
  id: number;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  voteAverage: number;
  voteCount: number;

  constructor(args?) {
    this.backdropPath = args.backdrop_path;
    this.id = args.id;
    this.overview = args.overview;
    this.popularity = args.popularity;
    this.posterPath = args.poster_path;
    this.releaseDate = args.release_date;
    this.title = args.title;
    this.voteAverage = args.vote_average;
    this.voteCount = args.vote_count;
  }
}
