import { Component } from '@angular/core';
import { Movie } from '../movie';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent {
  movies: Movie[] = [];
  constructor(private moviesService: MoviesService, private router: Router) { }

  async ngOnInit() {
    this.movies = await this.moviesService.getMovies();
  }

  showMovieDetails(movie: Movie): void {
    this.router.navigate(['/movies/movie-details', movie.id]);
  }
}