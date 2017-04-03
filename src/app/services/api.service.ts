import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, RequestOptionsArgs, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

import { GlobalService } from './global.service';

import {
  Config,
  requestRegisterParams,
  requestLoginParams,
  FetchArticleParams,
  BuildRequestParams,
  DeleteArticleParams
 } from '../interfaces';

@Injectable()
export class ApiService {

  host:string;

  constructor(public http: Http, public globalService: GlobalService) {
    this.host=this.globalService.config.apiBaseURL;
    console.log(this.host);
  }

  private getCommonHeaders(tokenHeader: boolean = true) {
    let headers = new Headers();

    headers.set('Content-Type', 'application/json');
    headers.set('Authorization', localStorage.getItem('packtoken'));
    return headers;
  }

  private buildRequest(params: BuildRequestParams, tokenHeader: boolean = true): RequestOptions {

    let args = <RequestOptionsArgs>{};
    params = params || {};

    if (params.body) {
      args.body = JSON.stringify(params.body);
    }

    if (params.query) {
      let queryParams = new URLSearchParams();

      Object.keys(params.query).forEach((key) => {
        queryParams.set(key, params.query[key]);
      });

      args.search = queryParams;
    }

    args.headers = this.getCommonHeaders(tokenHeader);
    return new RequestOptions(args);

  }

  requestSignUp(params: requestRegisterParams):Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new URLSearchParams();
    Object.keys(params).forEach((key)=>{
      options.set(key,params[key]);
    });
    return this.http.post(`${this.host}register/`,options,headers).map(res => res.json());
  }

  requestSignIn(params: requestLoginParams):Observable<any> {
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');

    let options = new URLSearchParams();
    Object.keys(params).forEach((key)=>{
      options.set(key,params[key]);
    });
    return this.http.post(`${this.host}login/`,options,headers).map(res => res.json());
  }

  fetchArticleList(params: FetchArticleParams): Observable<any> {
    let options = this.buildRequest({query: params});
    return this.http.get(`${this.host}article_list/`, options)
      .map(res => res.json());
  }

  fetchDetailView(params: FetchArticleParams,id: string): Observable<any> {
    let options = this.buildRequest({query: params});
    return this.http.get(`${this.host}${id}/`, options)
      .map(res => res.json());
  }

  deleteArticle(params: DeleteArticleParams,id:string): Observable<any> {
    let options = this.buildRequest({query: params});
    return this.http.delete(`https://nameless-lowlands-50285.herokuapp.com/api/article/`+id+`/delete/`, options)
      .map(res => res.json());
  }

  requestLogOut(params: FetchArticleParams): Observable<any> {
    let options = this.buildRequest({query: params});
    return this.http.get(`${this.host}logout/`, options)
      .map(res => res.json());
  }

}
