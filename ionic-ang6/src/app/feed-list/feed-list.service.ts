import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiListModule } from '../api-list.module';
import {map, catchError} from 'rxjs/operators';
import { Users } from '../models/users';
import {  Headers, Response, RequestOptions } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class FeedListService {


  constructor(private http: HttpClient) { }

  getFeedList(page:any) {
    console.log('get feed list servicecalled')
      // return this.http.get(ApiListModule.getFeedList).pipe(map((response: Response) => response));


      return this.http.get(ApiListModule.getFeedListUrl + '/' + page ).pipe(map((response: Response) => response));
    }
}
