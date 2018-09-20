import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class ApiListModule {

  public static baseApiUrl = 'http://www.jacdeveloper.in/mrutyunondh/api';
  public static getFeedListUrl = ApiListModule.baseApiUrl + '/feeds/feed_list';
  public static preSignupUrl = ApiListModule.baseApiUrl + '/feeds/pre_signup';
  public static signupUrl = ApiListModule.baseApiUrl + '/auth/signup';
  public static contactUrl = ApiListModule.baseApiUrl + '/feeds/contact_us';
  public static loginUrl  = ApiListModule.baseApiUrl + '/auth/login';
  public static logoutUrl = ApiListModule.baseApiUrl + '/logout';






 }
