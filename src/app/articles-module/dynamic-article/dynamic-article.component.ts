import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { ApisService } from 'src/app/apis.service';

@Component({
  selector: 'app-dynamic-article',
  templateUrl: './dynamic-article.component.html',
  styleUrls: ['./dynamic-article.component.css']
})
export class DynamicArticleComponent implements OnInit {

  vArticleDemo;
  vArticle;
  isLoading;
  vArticleName;
  getValueParams;

  constructor(private titleService: Title, private metaService: Meta, private apiService: ApisService, private route: ActivatedRoute, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    this.changeContent();
  }

  changeContent() {
    this.route.paramMap.subscribe(params => {
      this.isLoading = true;
      this.vArticleName = params.get('articleName')
      this.titleService.setTitle(this.vArticleName+" | gadgetin.in")
      this.getValueParams = 'article_name_url=' + this.vArticleName
      // console.log(this.vArticleName + "bbbbbbba")
      this.getFullArticle();
    });
  }
  getFullArticle() {
    console.log('get phone details');
    this.apiService.get_article_details(this.getValueParams).subscribe(
      data => {
        this.vArticleDemo = data;
        this.vArticle = this.vArticleDemo[0];
        this.metaService.updateTag({name: 'description', content: this.vArticle.article_description+ " | gadgetin.in"})
        this.isLoading = false;
        // this.vColor = this.phone[0].variant_Color[0].mobile_color
        console.log(this.vArticle)
        // console.log(this.vArticle)
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

}
