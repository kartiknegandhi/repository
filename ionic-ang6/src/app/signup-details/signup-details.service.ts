import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../models/users';
import { ApiListModule } from '../api-list.module';
import {map, catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SignupDetailsService {

  constructor(private http: HttpClient) { }

  getPreSignup() {
    console.log('get pre signup servicecalled')
      // return this.http.get(ApiListModule.getFeedList).pipe(map((response: Response) => response));


      return this.http.get(ApiListModule.preSignupUrl).pipe(map((response: Response) => response));
    }
    signup(signupObj: any){
      console.log(' signup servicecalled')
      // return this.http.get(ApiListModule.getFeedList).pipe(map((response: Response) => response));


      return this.http.post(ApiListModule.signupUrl, signupObj).pipe(map((response: Response) => response));
    }
  // getById(id: number) {
  //     return this.http.get(`${config.apiUrl}/users/` + id);
  // }

  // register(user: User) {
  //     return this.http.post(`${config.apiUrl}/users/register`, user);
  // }

  // update(user: User) {
  //     return this.http.put(`${config.apiUrl}/users/` + user.id, user);
  // }

  // delete(id: number) {
  //     return this.http.delete(`${config.apiUrl}/users/` + id);
  // }
}
