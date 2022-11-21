import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { Activity } from '../models/activity';
import { Daily } from '../models/daily';

@Injectable({
  providedIn: 'root'
})
export class DailyService {

  baseUrl = 'http://localhost:8083/';
  url = this.baseUrl + 'api/daily';

  activityUrl = this.baseUrl + 'api/activities/showall';

  newActivityUrl = this.baseUrl + 'api/daily/newactivity';

  removeUrl = this.baseUrl + 'api/daily';
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
  show(id: number): Observable<Daily> {
    return this.http.get<Daily>(this.url + '/' + id).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('DailyService.show(): error retrieving specific daily: ' + err)
      );
    })
  );
  }
  create(daily: Daily) {
    return this.http.post<Daily>(this.newActivityUrl, daily).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(() => Error('DailyService.create(): error creating a new daily item'));
      }));
  }

  update(id: number, daily: Daily) {
    return this.http.put<Daily>(this.url + '/' + id, daily).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(() => Error('DailyService.update(): error updating an existing daily item'));
      }));
  }

  destroy(dailyId: number) {
    return this.http.delete(this.removeUrl + '/' + dailyId).pipe(
      catchError((err: any) => {
      console.log(err);
      return throwError(
        () => new Error('DailyService.destroy(): error removing daily: ' + err)
      );
    })
    );
  }

  fetchActivities(): Observable<Activity[]> {
    return this.http.get<Activity[]>(this.activityUrl).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError(
          () => new Error('DailyService.fetchActivities(): error retrieving activity list: ' + err)
        );
      })
    );
    // return [...this.todos];
  }
}
