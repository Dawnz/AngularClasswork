import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { resData } from './app.component';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}
  getData() {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: 'Bearer -0IvYBs_fNA3A9WHJkGW',
      }),
    };
    // return this.http.get('https://the-one-api.dev/v2/quote', httpOptions).pipe(
    return this.http.get<resData>('https://swapi.dev/api/people').pipe(
      catchError((error) => {
        console.log(error);
        return throwError(() => new Error('Error'));
      })
    );
  }
}
