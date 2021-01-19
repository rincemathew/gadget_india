import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-url-phone-list',
  templateUrl: './url-phone-list.component.html',
  styleUrls: ['./url-phone-list.component.css']
})
export class UrlPhoneListComponent implements OnInit {

 
  urls=[
    {urlname:"apple",querypa:"mobileNames__brandName__brand_name=Apple",mainhead:"Apple",title:"Get the full list of Apple phones",
    descr:"Looking for Apple phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"google",querypa:"mobileNames__brandName__brand_name=Google",mainhead:"Google",title:"Get the full list of Google phones",
    descr:"Looking for Google phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"honor",querypa:"mobileNames__brandName__brand_name=Honor",mainhead:"Honor",title:"Get the full list of Honor phones",
    descr:"Looking for Honor phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"huawei",querypa:"mobileNames__brandName__brand_name=Huawei",mainhead:"Huawei",title:"Get the full list of Huawei phones",
    descr:"Looking for Huawei phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"lg",querypa:"mobileNames__brandName__brand_name=LG",mainhead:"LG",title:"Get the full list of LG phones",
    descr:"Looking for LG phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"micromax",querypa:"mobileNames__brandName__brand_name=Micromax",mainhead:"Micromax",title:"Get the full list of Micromax phones",
    descr:"Looking for Micromax phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"motorola",querypa:"mobileNames__brandName__brand_name=Motorola",mainhead:"Motorola",title:"Get the full list of Motorola phones",
    descr:"Looking for Motorola phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"nokia",querypa:"mobileNames__brandName__brand_name=Nokia",mainhead:"Nokia",title:"Get the full list of Nokia phones",
    descr:"Looking for Nokia phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"oneplus",querypa:"mobileNames__brandName__brand_name=OnePlus",mainhead:"OnePlus",title:"Get the full list of OnePlus phones",
    descr:"Looking for OnePlus phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"oppo",querypa:"mobileNames__brandName__brand_name=oppo",mainhead:"oppo",title:"Get the full list of Oppo phones",
    descr:"Looking for Oppo phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"poco",querypa:"mobileNames__brandName__brand_name=POCO",mainhead:"POCO",title:"Get the full list of POCO phones",
    descr:"Looking for POCO phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"realme",querypa:"mobileNames__brandName__brand_name=Realme",mainhead:"Realme",title:"Get the full list of Realme phones",
    descr:"Looking for Realme phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"samsung",querypa:"mobileNames__brandName__brand_name=Samsung",mainhead:"Samsung",title:"Get the full list of Samsung phones",
    descr:"Looking for Samsung phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"vivo",querypa:"mobileNames__brandName__brand_name=Vivo",mainhead:"Vivo",title:"Get the full list of Vivo phones",
    descr:"Looking for Vivo phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
    {urlname:"xiaomi",querypa:"mobileNames__brandName__brand_name=Xiaomi",mainhead:"Xiaomi",title:"Get the full list of Xiaomi phones",
    descr:"Looking for Xiaomi phone!!! Visit now to Get the full details, price, reviews, videos and manymore...."},
  ]

  isLoading=false;

  valueParm;
  getValueParams;
  objectRecived;
  phoneList;

  navigationpagenumber=1;
  countt;

  constructor(private titleService: Title, private metaService: Meta, private apiService: ApisService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

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
        takeArray = {urlname:"",querypa:"",mainhead:"",title:"",descr:""}
      }

      this.titleService.setTitle(takeArray.title+" | gadgetin.in")
      this.metaService.updateTag({name: 'description', content: takeArray.descr})
     
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
