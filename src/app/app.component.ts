import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { switchMap, tap } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'pm-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  searchText = '';
  data: any[] = [];
  recentNews: any[] = [];
  pagedList: any[] = [];
  length: number = 0;
  pageSize: number = 3;
  pageSizeOptions: number[] = [3, 6, 9, 12];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService
      .getNewestIds()
      .pipe(switchMap((ids) => this.apiService.getItems(ids)))
      .subscribe((data) => {
        this.recentNews = data.slice(0, 200);
        this.pagedList = this.recentNews.slice(0, 50);
        this.length = this.recentNews.length;
      });
  }

  OnPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    let endIndex = startIndex + event.pageSize;
    if (endIndex > this.recentNews.length) {
      endIndex = this.recentNews.length;
    }
    this.pagedList = this.recentNews.slice(startIndex, endIndex)
  }
}
