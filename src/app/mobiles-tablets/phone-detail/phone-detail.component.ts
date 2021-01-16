import { Component, OnInit, OnChanges } from '@angular/core';
import { ApisService } from '../../apis.service';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-phone-detail',
  templateUrl: './phone-detail.component.html',
  styleUrls: ['./phone-detail.component.css']
})
export class PhoneDetailComponent implements OnInit, OnChanges {

  phone;
  getValueParams: String;

  isLoading = false;

  vBrandName: String;
  vMobileName: String;
  vVariant: String;
  vColor;
  errorr: String;
  vImageArrayNumber: number = 0;


  constructor(private titleService: Title, private metaService: Meta, private apiService: ApisService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }


  ngOnChanges() {
    // this.changeContent();
    // this.getPhoneDetails();
  }

  ngOnInit() {
    this.changeContent();
  }


  changeContent() {
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      this.vBrandName = params.get('brandName')
      this.vMobileName = params.get('mobileName')
      this.vVariant = params.get('variant')
      this.titleService.setTitle("Get full details of "+this.vBrandName+" "+this.vMobileName+" | gadgetin.in")
      this.metaService.addTag({name: 'description', content: "Get full details of "+this.vBrandName+" "+this.vMobileName+". Check out full specifications, news, reviews and compare with other phones | gadgetin.in"})
      console.log(this.vVariant)
      this.getValueParams = 'mobileNames__mobile_name_url=' + this.vMobileName + '&mobileNames__brandName__brand_name_url=' + this.vBrandName
      console.log(this.vVariant + "bbbbbbba")
      this.getPhoneDetails();
    });
  }
  getPhoneDetails() {
    console.log('get phone details');
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phone = data;
        if (this.vVariant==null){
          this.vVariant = this.phone[0].mobile_variants_url
          console.log(this.vVariant)
        }
        this.isLoading = false;
        this.vColor = this.phone[0].variant_Color[0].mobile_color
        // console.log(this.phone[0].variant_Color[0].mobile_color)
        console.log(this.phone)
      },
      error => {
        console.log(error)
        // let snakeBarref = this._snackBar.open(error.message,"Reload",{duration: 50000});
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoading = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );
  }
  changeRight() {
    this.vImageArrayNumber = this.vImageArrayNumber + 1;

  }
  changeLeft() {

    this.vImageArrayNumber = this.vImageArrayNumber - 1;

  }
  goToLink(url: string) {
    window.open(url, "_blank");
  }
}
