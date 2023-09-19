import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { map, mergeMap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://hacker-news.firebaseio.com/v0';
  private recentStoriesUrl = `${this.apiUrl}/newstories.json`;

  constructor(private http: HttpClient) {}

  getItems(ids: number[]): Observable<any> {
    const observables = ids.map((id) => this.http.get(`${this.apiUrl}/item/${id}.json`));
    return forkJoin(observables);
  }

  getTopIds(): Observable<any> {
    return this.http.get(this.recentStoriesUrl);
  }
}
