import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {Observable} from 'rxjs';
import {News} from '../News';

@Injectable({
  providedIn: 'root'
})
export class NewsServiceService {
  private baseUrl: string;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:8080';
  }

  public getListNews(): Observable<News[]>{
    return this.httpClient.get<News[]>(this.baseUrl);
  }
}
