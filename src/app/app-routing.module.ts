import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { BottomDesignComponent } from './bottom-design/bottom-design.component';

const routes: Routes = [
  {path: 'phone-details/:id',component: PhoneDetailsComponent},
  {path: 'qa',component: BottomDesignComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
