import { Component, EventEmitter, Output } from '@angular/core';
import { MovieService } from '../service/movie.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class MovieSearchComponent {
  movieName: string = 'dark knight';

  constructor(private movieService: MovieService) {}

  searchMovie() {
    this.movieService.getMovie(this.movieName);
  }
}