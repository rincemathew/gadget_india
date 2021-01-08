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
      {
        path: ':articleName/:fdfdf',
        component: StaticArticlesComponent
      },
    ]
  },
  // {path: 'articles',component: ArticlesListComponent },
  // {path: 'articles/:articleName',component: DynamicArticleComponent },
  {path: ':articleName',component: StaticArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesModuleRoutingModule { }
