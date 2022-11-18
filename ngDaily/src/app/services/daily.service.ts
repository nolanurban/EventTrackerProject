import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Daily } from '../models/daily';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  baseUrl = 'http://localhost:8083/';
  url = this.baseUrl + 'api/daily';

  constructor(
    private http: HttpClient
  ) { }



  index(): Observable<Daily[]> {
    return this.http.get<Daily[]>(this.url).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('DailyService.index(): error retrieving daily list: ' + err)
        );
      })
    );
    // return [...this.todos];
  }
}
