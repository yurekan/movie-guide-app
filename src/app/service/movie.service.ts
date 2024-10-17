import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private apiKey = environment.omdbApiKey;
  private movieDataSubject = new BehaviorSubject<any>(null);
  movieData$ = this.movieDataSubject.asObservable();

  constructor(private http: HttpClient) {}

  getMovie(movieName: string) {
    const url = `http://www.omdbapi.com/?t=${movieName}&apikey=${this.apiKey}`;
    
    this.http.get(url).subscribe(
      (data: any) => {
        this.movieDataSubject.next(data);
      },
      (error) => {
        console.error('Error fetching movie data:', error);
        this.movieDataSubject.next({ Response: 'False', Error: 'Error Occurred' });
      }
    );
  }
}