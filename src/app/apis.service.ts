import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApisService {

  baseUrl = 'http://127.0.0.1:8000/';
  searchUrl = 'mobiles/search/?search=';
  // headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  // })


  constructor(private httpClient: HttpClient) { }

  get_search_result(parm){
    return this.httpClient.get(this.baseUrl+this.searchUrl+parm,);
  }

  
}
