import { Component, Input } from '@angular/core';
import { first } from 'rxjs';
import { MoviesService } from '../movies.service';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.css']
})
export class MovieFormComponent { 

  @Input() movie: Movie;
  constructor (private service: MoviesService) {
    this.movie = new Movie();
  }

  onSubmit() {
    console.log("dfjsn")
    this.service.addMovie(this.movie);
    this.service.updateMovie(this.movie); 
  }

}
