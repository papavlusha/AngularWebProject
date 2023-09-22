import { Injectable } from '@angular/core';
import { Movies } from 'src/data/mock-movie-list';
import { Movie } from './movie';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private movies: Movie[] = [];
  getMovies(): Movie[] {
    return Movies;
  }

  getMovieData(id: number) {
    return Movies.find(movie => movie.id === id);
  }

  addMovie(movie: Movie) {
    for(let i = 0; i < this.movies.length; i++){
        if(movie.id == this.movies[i].id){
          this.movies[i] = movie;
          return;
        }
    }
    movie.id = this.movies.length > 0 ? Math.max(...this.movies.map(d => d.id)) + 1 : 1;
    this.movies.push(movie);
    console.log(this.movies)
  }
  
  updateMovie(movie: Movie) {
    let idx = this.movies.findIndex(d => d.id === movie.id);
    if (idx !== -1) {
      this.movies[idx] = movie;
    }
  }
  
  deleteMovie(id: number | undefined) {
    for(let i = 0 ; i < this.movies.length; i ++){  
      if(this.movies[i].id == id){
        this.movies.splice(i,1)
        break;
      }    
    }
  }

  
  constructor() {
    this.movies = Movies;
   }
}
