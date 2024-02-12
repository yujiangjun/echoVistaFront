import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {FirstComponent} from './first/first.component';
import {SecondComponent} from './second/second.component';
import {ConfigComponent} from "./config/config.component";
import {httpInterceptorProviders} from "./interceptors";
import {AuthServices} from "./interceptors/auth.services";
import {ApiService} from "./config/api.service";

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ConfigComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    httpInterceptorProviders,
    AuthServices,
    ApiService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
