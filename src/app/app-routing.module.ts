import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '',component: MainPageComponent},
  // {path: 'phone-detailss',component: MainPageComponent},
  // {path: 'phone-details/:id',component: PhoneDetailsComponent},

  // {path: 'phone',loadChildren: 'app/mobiles-tablets/mobiles-tablets.module#MobilesTabletsModule'},

  {path: '**',component: MainPageComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
