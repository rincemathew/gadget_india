import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneCompareComponent } from './phone-compare/phone-compare.component';
import { PhoneRoutingModule } from './phone-routing.module';

@NgModule({
  declarations: [PhoneListComponent, PhoneDetailComponent, PhoneCompareComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule
  ]
})
export class MobilesTabletsModule { }
