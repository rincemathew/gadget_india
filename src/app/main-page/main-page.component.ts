import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Meta, Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApisService } from '../apis.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

latestPhone;
budgetPhones;
articlesandnews;

latestMobiles;
vlatestMobiles;
latestMobileParms='mobileNames__phone_type=SMARTPHONE';

budgetMobiles;
vbudgetMobiles;
budgetMobileParms='mobileNames__phone_type=SMARTPHONE&mobileGeneral__price__gte=9000&mobileGeneral__price__lte=11500';

articleNews;
varticleNews;
articleNewsParms;


  constructor(
    private titleService: Title, private metaService: Meta, private apiService: ApisService,private router: Router,private _snackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.latestPhones();
    this.BudgetPhone();
    this.ArticleandNews();
    this.titleService.setTitle("Indian Gadget discoverable site | Search Mobiles | Compare Mobiles | Mobile price | Mobile Review | gadgetin.in")
    this.metaService.updateTag({name: 'description', content: "Worried about which gadgets to buy?? Let's explore all the details and news about gadgets in India."})
      
  }



  latestPhones(){
    this.latestPhone=true;
    this.apiService.get_mobile_details(this.latestMobileParms).subscribe(
      data=>{
        this.vlatestMobiles = data;
        this.latestMobiles = this.vlatestMobiles.results;
        console.log(this.latestMobiles)
        this.latestPhone=false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.latestPhone = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }
    );
  }
  BudgetPhone(){
    this.budgetPhones=true;
    this.apiService.get_mobile_details(this.budgetMobileParms).subscribe(
      data=>{
        this.vbudgetMobiles = data;
        this.budgetMobiles = this.vbudgetMobiles.results;
        console.log(this.budgetMobiles)
        this.budgetPhones=false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.budgetPhones = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }
    );
  }

  ArticleandNews(){
    this.articlesandnews=true;
    this.apiService.get_list_articles(this.articleNewsParms).subscribe(
      data=>{
        this.varticleNews = data;
        this.articleNews = this.varticleNews.results;
        console.log(this.articleNews)
        this.articlesandnews=false;
      },
      error => {
        console.log(error)
        let snakeBarref = this._snackBar.open("something went wrong, check your internet connection", "Reload", { duration: 3000 });
        this.articlesandnews = false;

        snakeBarref.onAction().subscribe(() => {
          window.location.reload();
        })
      }
    );
  }


  
  @ViewChild('widgetsContent',{static:false}) widgetsContent: ElementRef;
  @ViewChild('BudgetPhones',{static:false}) BudgetPhones: ElementRef;
  @ViewChild('LatestPhones',{static:false}) LatestPhones: ElementRef;
  @ViewChild('ArticleNews',{static:false}) ArticleNews: ElementRef;
  scrollLeft(){
    this.widgetsContent.nativeElement.scrollLeft -= 150;
  }
  scrollRight(){
    this.widgetsContent.nativeElement.scrollLeft += 150;
  }
  scrollLatestPhonesRight(){
    this.LatestPhones.nativeElement.scrollLeft += 150;
  }
  scrollLatestPhonesLeft(){
    this.LatestPhones.nativeElement.scrollLeft -= 150;
  }
  scrollBudgetPhonesRight(){
    this.BudgetPhones.nativeElement.scrollLeft += 150;
  }
  scrollBudgetPhonesLeft(){
    this.BudgetPhones.nativeElement.scrollLeft -= 150;
  }
  scrollArticleNewsRight(){
    this.ArticleNews.nativeElement.scrollLeft += 150;
  }
  scrollArticleNewsLeft(){
    this.ArticleNews.nativeElement.scrollLeft -= 150;
  }

}
