import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArticlesListComponent } from './articles-list/articles-list.component';
import { DynamicArticleComponent } from './dynamic-article/dynamic-article.component';
import { StaticArticlesComponent } from './static-articles/static-articles.component';


const routes: Routes = [
  {path: 'articles', component: ArticlesListComponent},
  {path: 'ggf/:brandName/:mobileName',component: DynamicArticleComponent},
  // {path: 'phone-details',component: PhoneDetailComponent},
  {path: 'bgggh',component: StaticArticlesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticlesModuleRoutingModule { }
