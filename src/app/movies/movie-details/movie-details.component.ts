import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {
  movie: Movie | undefined;

  constructor(private movieService: MoviesService, private route: ActivatedRoute, private router: Router) { }

  async ngOnInit() {
    const movieId = this.route.snapshot.paramMap.get('id')!
    this.movie = await this.movieService.getMovieData(movieId);
  }

   onDel(){
    console.log("lox");
    if(this.movie)
    {
      this.movieService.deleteMovie(this.movie.id);
      this.gotoCenter();
    }
    
  }

  gotoCenter(){
    this.router.navigate([''])
  }
}
