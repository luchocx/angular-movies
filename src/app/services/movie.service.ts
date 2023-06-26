import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiResponse } from '../interfaces/apiResponse';
import { Movie } from '../interfaces/movies';

@Injectable({
  providedIn: 'root'
})

export class MovieService {
  // key 7b61c740
  private apiUrl: string = 'https://www.omdbapi.com/?apikey=7b61c740';

  constructor(private http: HttpClient) { }

  getMovies(searchTerm: string): Observable<Movie[]> {
    return this.http.get<ApiResponse>(`${this.apiUrl}&s=${searchTerm}`).pipe(
      map(response => {
        return response.Search;
      })
    )
  }
}
