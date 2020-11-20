import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

latestMobiles;
latestMobileParms;

  constructor(
    private apiService: ApisService,private router: Router
  ) { }

  ngOnInit() {
    // this.latestPhones();
  }



  latestPhones(){
    this.apiService.get_mobile_details(this.latestMobileParms).subscribe(
      data=>{
        this.latestMobiles = data;
        console.log(this.latestMobiles)
      },
      error=>console.log(error)  
    );
  }


  
  @ViewChild('widgetsContent',{static:false}) widgetsContent: ElementRef;
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }
  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }
  scrollRig(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }

}
