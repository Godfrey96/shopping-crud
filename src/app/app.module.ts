import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

//import { AlertifyService } from '../../src/app/products/alertify.service';

//import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';


import { OrdersModule } from './orders/orders.module'
import { SiteFrameworkModule } from '../app/site-framework/site-framework.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    OrdersModule,
    SiteFrameworkModule,
    BrowserAnimationsModule
    //NgxPaginationModule
  ],
  providers: [
    //AlertifyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
