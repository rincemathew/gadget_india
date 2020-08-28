import { Component, OnInit } from '@angular/core';
import {ApisService} from '../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-design',
  templateUrl: './top-design.component.html',
  styleUrls: ['./top-design.component.css']
})
export class TopDesignComponent implements OnInit {

  mobiles;  //mobiles = [];
  search_item = "";

  constructor(
    private apiService: ApisService,private router: Router
  ) { }

  ngOnInit() {
    
  }

  //while changing the characters in the search box 
  charChange(){
    if (this.search_item.length < 2) {
      console.log(this.search_item.length)
    }
    else{
      this.searchButtonClick();
      console.log(this.search_item.length)
    }
    //console.log(this.search_item.length)
    
  }

  //while clicking the search button
  searchButtonClick(){
    this.apiService.get_search_result(this.search_item).subscribe(
      data=>{
        this.mobiles = data;
      },
      error=>console.log(error)
      
    );
  }

  selectMobile(arg){
    this.router.navigate(['/phone-details',arg]);
    console.log("item selected"+ arg)
  }

}
