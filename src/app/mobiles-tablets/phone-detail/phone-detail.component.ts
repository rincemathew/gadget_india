import { Component, OnInit, OnChanges } from '@angular/core';
import {ApisService} from '../../apis.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit, OnChanges {

  phone;
  getValueParams:String;

  isLoading = false;

  vBrandName:String;
  vMobileName:String;


  constructor(private apiService: ApisService, private route: ActivatedRoute ) { }


  ngOnChanges() {
    // this.changeContent();
    // this.getPhoneDetails();
  }
  
  ngOnInit() {
    this.changeContent();
  }


  changeContent(){
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      this.vBrandName = params.get('brandName')
      this.vMobileName = params.get('mobileName')
      this.getValueParams = 'mobileNames__mobile_name='+this.vMobileName+'&mobileNames__brandName__brand_name='+ this.vBrandName
    console.log(this.getValueParams+"bbbbbbb")
    this.getPhoneDetails();
  });
  }
  getPhoneDetails(){
    console.log('get phone details');
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data=>{
        this.phone = data;
        this.isLoading = false;
        console.log(this.phone)
      },
      error=>{console.log(error)
        this.isLoading = false;
      }
      
    );
  }
}
