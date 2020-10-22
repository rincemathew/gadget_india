import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhoneListComponent } from './phone-list/phone-list.component';
import { PhoneDetailComponent } from './phone-detail/phone-detail.component';
import { PhoneCompareComponent } from './phone-compare/phone-compare.component';
import { PhoneRoutingModule } from './phone-routing.module';
import { FormsModule } from '@angular/forms';

import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatSelectModule} from '@angular/material/select';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [PhoneListComponent, PhoneDetailComponent, PhoneCompareComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    FormsModule,
    MatSnackBarModule,
  ]
})
export class MobilesTabletsModule { }
