import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-phone-details',
  templateUrl: './phone-details.component.html',
  styleUrls: ['./phone-details.component.css']
})
export class PhoneDetailsComponent implements OnInit, OnChanges {

  name: any;

  constructor(private route: ActivatedRoute) { }
  ngOnChanges(changes: SimpleChanges): void {
    //this.changeContent();
    console.log("changed")
  }

  ngOnInit() {
    this.changeContent();
  }

  changeContent(){
    this.route.params.subscribe(params => {
      this.name = params['id'];
      // this.initialiseState(); 
    // this.name = this.route.snapshot.params['id'];
    console.log(name)
  });
  }
  

}
