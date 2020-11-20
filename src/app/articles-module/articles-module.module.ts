import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticlesModuleRoutingModule } from './articles-module-routing.module';
import { StaticArticlesComponent } from './static-articles/static-articles.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { DynamicArticleComponent } from './dynamic-article/dynamic-article.component';

@NgModule({
  declarations: [StaticArticlesComponent, ArticlesListComponent, DynamicArticleComponent],
  imports: [
    CommonModule,
    ArticlesModuleRoutingModule
  ]
})
export class ArticlesModuleModule { }
