import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.css']
})
export class PhoneListComponent implements OnInit {


  isLoading;

  vBrandName='';
  vPhoneType='';
  vPriceGreater='';
  vPriceLess='';


  getValueParams;
  objectRecived;
  phoneList;

  constructor(private apiService: ApisService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.changeContent();
  }

  changeContent() {
    this.route.queryParamMap.subscribe(params => {
      this.isLoading = true;
      this.vBrandName = params.get('mobileNames__brandName__brand_name')
      this.vPhoneType = params.get('mobileNames__phone_type')
      this.vPriceGreater = params.get('mobileGeneral__price__gte')
      this.vPriceLess = params.get('mobileGeneral__price__lte')

      // this.vBrandName = (this.vBrandName==null ? '':'')
      if(this.vBrandName==null) {this.vBrandName = '';}
      if(this.vPhoneType==null) {this.vPhoneType = '';}
      if(this.vPriceGreater==null) {this.vPriceGreater = '';}
      if(this.vPriceLess==null) {this.vPriceLess = '';}

      this.getValueParams = 'mobileNames__brandName__brand_name=' + this.vBrandName + '&mobileNames__phone_type='+this.vPhoneType+'&mobileGeneral__price__gte='+this.vPriceGreater +'&mobileGeneral__price__lte='+this.vPriceLess
      console.log(this.getValueParams + "bbbbbbba")
      this.getPhoneDetails();
    });
  }
  getPhoneDetails() {
    this.apiService.get_mobile_details(this.getValueParams).subscribe(
      data => {
        this.objectRecived = data;
        this.phoneList = this.objectRecived.results
        this.isLoading = false;
        console.log(this.objectRecived)
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoading = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );
  }
}
