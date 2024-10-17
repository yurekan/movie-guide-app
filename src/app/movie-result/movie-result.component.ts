import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { MovieService } from '../service/movie.service';

@Component({
  selector: 'app-movie-result',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-result.component.html',
  styleUrl: './movie-result.component.css'
})

export class MovieResultComponent implements OnInit {
  movieData: any;

  constructor(private movieService: MovieService) {}

  ngOnInit() {
    this.movieService.movieData$.subscribe(data => {
      this.movieData = data;
    });
  }
}

