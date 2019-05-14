import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AckFxModule } from 'ack-angular-fx';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { AckRouterModule } from "ack-angular/AckRouterModule"
import { NgxPageScrollModule } from "ngx-page-scroll"


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    AckRouterModule,
    AppRoutingModule,
    AckFxModule
  ],
  providers: [],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
