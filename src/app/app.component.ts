import { Component } from '@angular/core';
import { NewsAPIService } from './services/news-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  newsList: any[] = [];
  loader: boolean = false;

  constructor(private _api: NewsAPIService) {}

  searchNews(param: any) {
    this.loader = true;

    setTimeout(() => {
      this._api.getNews(param).subscribe((res) => {
        this.newsList = res.articles;
        this.loader = false;
      });
    }, 1200);
  }

  queryByWord(param:string) {
    this.loader = true;

    setTimeout(() => {
      this._api.getByQuery(param).subscribe((res) => {
        this.newsList = res.articles;
        this.loader = false;
      });
    }, 1200);
    
  }
}
