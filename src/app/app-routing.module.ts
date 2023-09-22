import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MovieCenterComponent } from './movies/movie-center/movie-center.component';
import { MovieDetailsComponent } from './movies/movie-details/movie-details.component';
import { MovieFormComponent } from './movies/movie-form/movie-form.component';

const routes: Routes = [
  { path: '', component: MovieCenterComponent },
  { path: 'movies', redirectTo: '', pathMatch: 'full' },
  { path: 'movies/movie-details/:id', component: MovieDetailsComponent },
  {path: 'movies/movie-form', component: MovieFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
