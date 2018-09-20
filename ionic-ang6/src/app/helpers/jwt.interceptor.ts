import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Http, Response, Headers, RequestOptions, RequestOptionsArgs, Request, XHRBackend, ResponseContentType } from '@angular/http';
// import { Observable, of } from 'rxjs';
// import { catchError } from '../../../node_modules/rxjs/operators';
import { AuthenticationService } from '../services/authentication.service'
import { Observable, Subscription, timer, of, from } from "rxjs";
import { map, tap, catchError, finalize } from "rxjs/operators";
import { LoadingController } from '@ionic/angular';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

constructor(private http: Http ,private authenticationService: AuthenticationService,     public loadingController: LoadingController){

}


    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (request.url.indexOf('http://www.jacdeveloper.in/mrutyunondh/api/feeds/feed_list/')<=-1){
        this.presentLoading();
    }
        console.log('intercepting request' , request);
        console.log('current user intercepted', localStorage.getItem('currentUser'), localStorage.getItem('token'))
        // add authorization header with jwt token if available

        if (localStorage.getItem('token')){
            request = this.cloneRequest(request);
        }

        return next.handle(request).pipe(catchError((error,caught) =>
    {
        console.log(error);
        // this.handleAuthError(request , error);
        return of(error);
    }) as any)
    }

cloneRequest(request: HttpRequest<any>):any{
    console.log('cloning req');
    request = request.clone({
                setHeaders: {
                    // 'Authorization': 'Basic cXdlcnQjJCUxNDM=',
                    'Content-Type':'application/json; charset=utf-8',
                    'X-Access-Token': localStorage.getItem('token')
                }
            });
        
console.log(request);
        return request;
    }



      async presentLoading() {
        const loading = await this.loadingController.create({
          duration: 3000,
          translucent: true,
        });
        return await loading.present();
      }
    
      async presentLoadingWithOptions() {
        const loading = await this.loadingController.create({
          spinner: 'hide',
          duration: 5000,
          cssClass: 'custom-class custom-loading'
        });
        return await loading.present();
      }
    }
