import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Nextech-coding-challenge';
  data: any[] = [];
  recentIds: number[] = [];
  recentNews: any[] = [];

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.getTopIds().pipe(
      switchMap(ids => this.apiService.getItems(ids))
    ).subscribe(data => {
      this.recentNews = data.slice( 1, 50);
      console.log(this.recentNews.slice( 1, 25));
    });
  }
}
