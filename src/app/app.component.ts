import { Component, OnInit } from '@angular/core';
import {ApisService} from './apis.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'indiangadget';
  movies = [];
  search_item;

  constructor(
    private apiService: ApisService
  ){}

  ngOnInit() {

    // this.apiService.get_search_result(this.search_item).subscribe(
    //   data=>{
    //     this.movies = data;
    //   },
    //   error=>console.log(error)
      
    // );
  }

}
