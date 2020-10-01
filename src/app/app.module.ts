import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {Routes, RouterModule} from '@angular/router';

import {ApisService} from './apis.service';

import {HttpClientModule} from '@angular/common/http';

import {FormsModule} from '@angular/forms';

import { MobilesTabletsModule } from './mobiles-tablets/mobiles-tablets.module';

import { AppComponent } from './app.component';
import { TopDesignComponent } from './top-design/top-design.component';
import { BottomDesignComponent } from './bottom-design/bottom-design.component';
import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { MainPageComponent } from './main-page/main-page.component';


@NgModule({
  declarations: [
    AppComponent,
    TopDesignComponent,
    BottomDesignComponent,
    PhoneDetailsComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MobilesTabletsModule,
    AppRoutingModule,
  ],
  providers: [
    ApisService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
