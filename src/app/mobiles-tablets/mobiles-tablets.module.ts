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
import { UrlPhoneListComponent } from './url-phone-list/url-phone-list.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressBarModule } from '@angular/material/progress-bar';

@NgModule({
  declarations: [PhoneListComponent, PhoneDetailComponent, PhoneCompareComponent, UrlPhoneListComponent],
  imports: [
    CommonModule,
    PhoneRoutingModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatAutocompleteModule,
    MatSelectModule,
    FormsModule,
    MatProgressBarModule,
    MatSnackBarModule,
  ]
})
export class MobilesTabletsModule { }
