import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MovieResultComponent } from "./movie-result/movie-result.component";
import { MovieSearchComponent } from "./search/search.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, MovieResultComponent, MovieSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'movie-guide-app';
}
