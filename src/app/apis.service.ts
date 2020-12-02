import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  // baseUrl = 'http://127.0.0.1:8000/';
  baseUrl = 'https://gadget-india.el.r.appspot.com/';
  searchUrl = 'mobiles/search/?search=';
  mobileDetail = 'mobiles/mobile/?';
  mobileDetails = 'mobiles/mobiles/?';
  articleDetails = 'articles/article/?';
  list_articles = 'articles/listarticles/?';
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // })


  constructor(private httpClient: HttpClient) { }
// top-design.component.ts
  get_search_result(parm){
    return this.httpClient.get(this.baseUrl+this.searchUrl+parm,);
  }

  //mobile detailed views (phone-detail.component.ts,)
  get_full_mobile_details(parm){
    return this.httpClient.get(this.baseUrl+this.mobileDetail+parm,);
  }

  // main-page.component.ts
  get_mobile_details(parm){
    return this.httpClient.get(this.baseUrl+this.mobileDetails+parm,);
  }

  get_article_details(parm){
    return this.httpClient.get(this.baseUrl+this.articleDetails+parm,);
  }
  get_list_articles(parm){
    return this.httpClient.get(this.baseUrl+this.list_articles+parm,);
  }
}
