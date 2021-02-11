import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-phone-compare',
  templateUrl: './phone-compare.component.html',
  styleUrls: ['./phone-compare.component.css']
})
export class PhoneCompareComponent implements OnInit {

  getValueParams
  isLoading
  isLoadingSecond

  search_itemOne
  mobileOne
  mobilesOne
  isLoadingOne
  phoneOne
  VariantOne

  search_itemTwo
  mobileTwo
  mobilesTwo
  isLoadingTwo
  phoneTwo
  VariantTwo

  search_itemThree
  mobileThree
  mobilesThree
  isLoadingThree
  phoneThree
  VariantThree

  search_itemFour
  mobileFour
  mobilesFour
  isLoadingFour
  phoneFour
  VariantFour

  constructor(private apiService: ApisService,private router: Router,private _snackBar: MatSnackBar) { }

  ngOnInit() {
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
  this.isLoadingSecond = true;
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
        this.isLoadingSecond = false;
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
        this.isLoadingOne = false;

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
    },
    error=>console.log(error)
    
  );
}

selectMobileTwo(brandName, mobileName, mobileVariant){
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneTwo = data;
        for (var val of this.phoneTwo){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantTwo = val
          }
        }
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingTwo = false;
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
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingThree = false;

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
    },
    error=>console.log(error)
    
  );
}

selectMobileFour(brandName, mobileName, mobileVariant){
  this.getValueParams = 'mobileNames__mobile_name_url=' + mobileName + '&mobileNames__brandName__brand_name_url=' + brandName
    this.apiService.get_full_mobile_details(this.getValueParams).subscribe(
      data => {
        this.phoneFour = data;
        for (var val of this.phoneFour){
          if (val.mobile_variants_url == mobileVariant){
            this.VariantFour = val
          }
        }
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.isLoadingFour = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }

    );

}
}
