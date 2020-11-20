import { Component, OnInit } from '@angular/core';
import {ApisService} from '../apis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-top-design',
  templateUrl: './top-design.component.html',
  styleUrls: ['./top-design.component.css']
})
export class TopDesignComponent implements OnInit {

  mobile;
  mobiles;  //mobiles = [];
  search_item = "";
  newvar;
  isLoading;

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
      this.isLoading= true;
      console.log(this.search_item.length)
    }
    //console.log(this.search_item.length)
    
  }

  //while clicking the search button
  searchButtonClick(){
    this.apiService.get_search_result(this.search_item).subscribe(
      data=>{
        this.mobile = data;
        this.mobiles =this.mobile.results
        this.isLoading= false;
        console.log(this.mobiles)
      },
      error=>console.log(error)
      
    );
  }

  selectMobile(brandName, mobileName, mobileVariant){
    this.router.navigate(['/phone-details',brandName, mobileName,{variant:mobileVariant}]);
    console.log("item selected"+ brandName + mobileName)
  }

}
