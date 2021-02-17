import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-phone-compare',
  templateUrl: './phone-compare.component.html',
  styleUrls: ['./phone-compare.component.css']
})
export class PhoneCompareComponent implements OnInit {

  getValueParams  

  search_itemOne
  mobileOne
  mobilesOne
  isLoadingOne
  isLoadingOne1
  phoneOne
  VariantOne
  titleone = ""

  search_itemTwo
  mobileTwo
  mobilesTwo
  isLoadingTwo
  isLoadingTwo1
  phoneTwo
  VariantTwo
  titletwo = ""

  search_itemThree
  mobileThree
  mobilesThree
  isLoadingThree
  isLoadingThree1
  phoneThree
  VariantThree
  titlethree = ""

  search_itemFour
  mobileFour
  mobilesFour
  isLoadingFour
  isLoadingFour1
  phoneFour
  VariantFour
  titlefour = ""

  constructor(private titleService: Title, private metaService: Meta, private apiService: ApisService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.titleservice();
  }


  // column one
charChangeOne(){
  if (this.search_itemOne.length < 2) {
    console.log(this.search_itemOne.length)
  }
  else{
    this.ColumnOne();
    this.isLoadingOne= true;
    console.log(this.search_itemOne.length)
  }
}

ColumnOne(){
  this.apiService.get_search_result(this.search_itemOne).subscribe(
    data=>{
      this.mobileOne = data;
      this.mobilesOne =this.mobileOne.results
      this.isLoadingOne= false;
      console.log(this.mobilesOne)
    },
    error=>console.log(error)
    
  );
}

selectMobileOne(brandName, mobileName, mobileVariant){
  this.titleone = brandName+" "+mobileName
  this.titleservice();
  this.isLoadingOne1 = true;
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
  // this.vVariantOne = mobileVariant
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneOne = data;
        for (var val of this.phoneOne){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantOne = val
            console.log(this.VariantOne)
          }
        }
        this.isLoadingOne1 = false;
        // if (mobileVariant==null){
        //   this.vVariantOne = this.phoneOne[0].mobile_variants_url
        // }
        // this.isLoadingOne = false;
        // this.vColor = this.phone[0].variant_Color[0].mobile_color
      },
      error => {
        console.log(error)
        // let snakeBarref = this._snackBar.open(error.message,"Reload",{duration: 50000});
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingOne1 = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );

}


// column Two
charChangeTwo(){
  if (this.search_itemTwo.length < 2) {
    console.log(this.search_itemTwo.length)
  }
  else{
    this.ColumnTwo();
    this.isLoadingTwo= true;
    console.log(this.search_itemTwo.length)
  }
}

ColumnTwo(){
  this.apiService.get_search_result(this.search_itemTwo).subscribe(
    data=>{
      this.mobileTwo = data;
      this.mobilesTwo =this.mobileTwo.results
      this.isLoadingTwo= false;
      console.log(this.mobilesTwo)
    },
    error=>console.log(error)
    
  );
}

selectMobileTwo(brandName, mobileName, mobileVariant){
  this.titletwo = " Vs "+brandName+" "+mobileName
  this.titleservice();
  this.isLoadingTwo1 = true;
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneTwo = data;
        for (var val of this.phoneTwo){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantTwo = val
          }
        }
        this.isLoadingTwo1 = false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingTwo1 = false;
        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );

}

// column Three
charChangeThree(){
  if (this.search_itemThree.length < 2) {
  }
  else{
    this.ColumnThree();
    this.isLoadingThree= true;
  }
}

ColumnThree(){
  this.apiService.get_search_result(this.search_itemThree).subscribe(
    data=>{
      this.mobileThree = data;
      this.mobilesThree =this.mobileThree.results
      this.isLoadingThree= false;
    },
    error=>console.log(error)
    
  );
}

selectMobileThree(brandName, mobileName, mobileVariant){
  this.titlethree = " Vs "+brandName+" "+mobileName
  this.titleservice();
  this.isLoadingThree1 = true;
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneThree = data;
        for (var val of this.phoneThree){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantThree = val
            console.log(this.VariantThree)
          }
        }
        this.isLoadingThree1 = false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingThree1 = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );

}


// column Four
charChangeFour(){
  if (this.search_itemFour.length < 2) {
  }
  else{
    this.ColumnFour();
    this.isLoadingFour= true;
  }
}

ColumnFour(){
  this.apiService.get_search_result(this.search_itemFour).subscribe(
    data=>{
      this.mobileFour = data;
      this.mobilesFour =this.mobileFour.results
      this.isLoadingFour= false;
      console.log(this.mobilesOne)
      console.log(this.mobilesFour)
    },
    error=>console.log(error)
    
  );
}

selectMobileFour(brandName, mobileName, mobileVariant){
  this.titlefour = " Vs "+brandName+" "+mobileName
  this.titleservice();
  this.isLoadingFour1 = true;
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneFour = data;
        for (var val of this.phoneFour){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantFour = val
          }
        }
        this.isLoadingFour1 = false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingFour1 = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );

}
titleservice(){ 
  this.titleService.setTitle("Compare phones "+this.titleone+this.titletwo+this.titlethree+this.titlefour+" | gadgetin.in")
  this.metaService.updateTag({name: 'description', content: "Compare "+this.titleone+this.titletwo+this.titlethree+this.titlefour+" and Get full details of Price, Camera, Performance, battery, expert reviews and decide which phone compatible for you  | gadgetin.in"})
}
}
