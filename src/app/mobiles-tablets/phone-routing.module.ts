import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'; 


import { PhoneCompareComponent } from './phone-compare/phone-compare.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

const routes: Routes = [
  {path: 'phone-list', component: PhoneListComponent},
  {path: 'phone-detail',component: PhoneDetailComponent},
  {path: 'phone-compare',component: PhoneCompareComponent },
  
];
@NgModule({
  imports: [ RouterModule.forChild(routes)],
  exports: [ RouterModule ]
})
export class PhoneRoutingModule { }
