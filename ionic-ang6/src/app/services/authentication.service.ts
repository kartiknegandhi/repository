//auth service

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { ApiListModule } from '../api-list.module';
import { Router } from '@angular/router';
import {  Headers, Response, RequestOptions } from '@angular/http';
import { Users } from '../models/users';
import { JwtHelperService } from '@auth0/angular-jwt';
import { throwError as observableThrowError, Observable } from 'rxjs';
import { Login } from '../login/login';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    token: string;
    currentUser: Users;
    router: Router;
    loggedInUserName: string;
    authloginRes: any;
    errorMessage: String;
    responseStatus:any;
    loginAuthResponse: any;
    constructor(router: Router, private http: HttpClient, public jwtHelperService: JwtHelperService) {
        this.token = localStorage.getItem('token');
        this.router = router;
        // this.http = http;

        this.loggedInUserName = localStorage.getItem('loggedInUserName');
    }
    ngOnInit() {

    }

    authlogin(credentials){
        console.log(credentials)
        console.log('localstorageToken' , localStorage.getItem('token'))
        const httpOptions = {
            headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'X-ACCESS-TOKEN': 'cXdlcnQjJCUxNDM=',

        })
    };
let url = ApiListModule.loginUrl ,
body = JSON.stringify({
    username: credentials.username,
    password: credentials.password
})
console.log(this.http.post(url, body, httpOptions).pipe(map((response: Response) => response)));
console.log(this.http.post(url, body, httpOptions));

          this.http.post(url, body, httpOptions).subscribe(data =>{
            console.log(data)
           this.loginAuthResponse = data
          },
          error =>{
            console.log(error);
             this.loginAuthResponse = error
            }); 
return this.loginAuthResponse;
}




    isLoggedIn(): boolean {
        return !!this.currentUser;
    }


    private extractData(res: Response) {
        let body = res.json();
        // let body_data = body['data'];
        // this.token = body_data['access_token'];
        console.log('response body', body)
        // localStorage.setItem('token', this.token);
        // console.log('local storage access_token' , localStorage.getItem('token'))

        return body || {};
    }
    private handleErrorPromise(error: Response | any) {
        console.log(error);
        console.error(error.message || error);
        return Promise.reject(error.message || error);
    }


    logout() {
        console.log('logging out')
        localStorage.removeItem('token');
        localStorage.removeItem('loggedInUserName');
        this.router.navigateByUrl('/');
    }

    updateToken(): Observable<boolean> {

        var url = ApiListModule.loginUrl  ;
        var body = JSON.stringify({
            username: '9167834599',
            password: 'qwerty'
        })

        let options = {
            headers: new Headers({
                'Accept': 'application/json',
                'Authorization': 'Basic cXdlcnQjJCUxNDM=',

                'Content-Type': 'application/x-www-form-urlencoded',
                'X-Access-Token': 'cXdlcnQjJCUxNDM=',
            })
        };
        return this.http.post(url, body).pipe(
            map((response: Response) => {
                var returnedBody: any = response.json();
                if (typeof returnedBody.access_token !== 'undefined') {
                    localStorage.setItem('token', returnedBody.access_token);
                    localStorage.setItem('refreshToken', returnedBody.refresh_token);
                    return true;
                }
                else {
                    // this.router.navigateByUrl('/');

                    return false;

                }
            }
            ),
            catchError((error: any) => {
                this.router.navigateByUrl('/');

                return observableThrowError( 'Can\'t refresh the token')
            }), );
    }

}