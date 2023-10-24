import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const API_KEY = '216e8e7dfee649b08ffebe10a69552d2';
const URL = 'https://newsapi.org/v2/';
const BY_QUERY = 'everything?q=';

@Injectable({
  providedIn: 'root',
})
export class NewsAPIService {
  constructor(private http: HttpClient) {}

  getNews(param: any): Observable<any> {
    const ENDPOINT = `${URL}top-headlines?country=${param.country}&category=${param.topic}&apiKey=${API_KEY}`;

    return this.http.get(ENDPOINT);
  }

  getByQuery(param: string): Observable<any> {
    const ENDPOINT = `${URL}${BY_QUERY}${param}&apiKey=${API_KEY}`;

    return this.http.get(ENDPOINT);
  }
}
