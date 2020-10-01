import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [
  {path: '',component: MainPageComponent},
  {path: 'phone-details',component: PhoneDetailsComponent},
  // {path: 'phone-details/:id',component: PhoneDetailsComponent},

  {path: '**',component: MainPageComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
