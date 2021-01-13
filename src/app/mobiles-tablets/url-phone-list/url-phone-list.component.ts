import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-url-phone-list',
  templateUrl: './url-phone-list.component.html',
  styleUrls: ['./url-phone-list.component.css']
})
export class UrlPhoneListComponent implements OnInit {

 
  urls=[
    {urlname:"apple",querypa:"mobileNames__brandName__brand_name=Apple",mainhead:"Apple"},
    {urlname:"google",querypa:"mobileNames__brandName__brand_name=Google",mainhead:"Google"},
    {urlname:"honor",querypa:"mobileNames__brandName__brand_name=Honor",mainhead:"Honor"},
    {urlname:"huawei",querypa:"mobileNames__brandName__brand_name=Huawei",mainhead:"Huawei"},
    {urlname:"lg",querypa:"mobileNames__brandName__brand_name=LG",mainhead:"LG"},
    {urlname:"micromax",querypa:"mobileNames__brandName__brand_name=Micromax",mainhead:"Micromax"},
    {urlname:"motorola",querypa:"mobileNames__brandName__brand_name=Motorola",mainhead:"Motorola"},
    {urlname:"nokia",querypa:"mobileNames__brandName__brand_name=Nokia",mainhead:"Nokia"},
    {urlname:"oneplus",querypa:"mobileNames__brandName__brand_name=OnePlus",mainhead:"OnePlus"},
    {urlname:"oppo",querypa:"mobileNames__brandName__brand_name=oppo",mainhead:"oppo"},
    {urlname:"poco",querypa:"mobileNames__brandName__brand_name=POCO",mainhead:"POCO"},
    {urlname:"realme",querypa:"mobileNames__brandName__brand_name=Realme",mainhead:"Realme"},
    {urlname:"samsung",querypa:"mobileNames__brandName__brand_name=Samsung",mainhead:"Samsung"},
    {urlname:"vivo",querypa:"mobileNames__brandName__brand_name=Vivo",mainhead:"Vivo"},
    {urlname:"xiaomi",querypa:"mobileNames__brandName__brand_name=Xiaomi",mainhead:"Xiaomi"},
  ]

  isLoading=false;

  valueParm;
  getValueParams;
  objectRecived;
  phoneList;

  navigationpagenumber=1;
  countt;

  constructor(private apiService: ApisService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.changeContent();
  }

  changeContent() {
    this.route.paramMap.subscribe(params => {
      console.log(this.isLoading)
      this.isLoading = true;

      this.valueParm = params.get('otherLinks')
      console.log(this.valueParm)
      var takeArray = this.urls.find(takeUrl => takeUrl.urlname == this.valueParm);
      console.log(takeArray);

      if (takeArray === undefined){
        takeArray = {urlname:"",querypa:"",mainhead:""}
      }
      this.getValueParams = takeArray.querypa
      // this.getValueParams = this.urls[this.valueParm]
      console.log(this.getValueParams)
      this.getPhoneDetails();
    });
  }
  getPhoneDetails() {
    this.apiService.get_mobile_details(this.getValueParams).subscribe(
      data => {
        this.objectRecived = data;
        this.countt = this.objectRecived.count;
        this.phoneList = this.objectRecived.results
        this.isLoading = false;
     
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
  previous(parms){
    this.route.queryParamMap.subscribe(params => {
      this.isLoading = true;
      this.navigationpagenumber--;
      this.getValueParams = parms
      console.log(this.getValueParams + "bbbbbbba")
      this.getPhoneDetails();
    });
  }
  next(parms){
    this.route.queryParamMap.subscribe(params => {
      this.isLoading = true;
      this.navigationpagenumber++;
      this.getValueParams = parms
      console.log(this.getValueParams + "bbbbbbba")
      this.getPhoneDetails();
    });
  }

}
