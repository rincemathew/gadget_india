import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { DynamicArticleComponent } from './dynamic-article/dynamic-article.component';
import { StaticArticlesComponent } from './static-articles/static-articles.component';


const routes: Routes = [
  {
    path: 'articles', 
    children:[
      {
        path: '',
        component: ArticlesListComponent
      },
      {
        path: ':articleName',
        component: DynamicArticleComponent
      },
      // {
      //   path: 'article',
      //   component: StaticArticlesComponent
      // },
      // {
      //   path: ':articleType/:articleName',
      //   component: DynamicArticleComponent
      // },
    ]
  },
  // {path: 'articles',component: ArticlesListComponent },
  // {path: 'articles/:articleName',component: DynamicArticleComponent },
  {path: 'a/:articleName',component: StaticArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesModuleRoutingModule { }
