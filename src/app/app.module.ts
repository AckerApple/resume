import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AckFxModule } from 'ack-angular-fx';
import { AckModule } from 'ack-angular/AckModule';
import { AckOfflineModule } from 'ack-angular/modules/offline/module';

import { AppRoutingModule } from './app-routing.module';
import { AckRouterModule } from "ack-angular/AckRouterModule"
import { NgxPageScrollModule } from "ngx-page-scroll"
import { hammerProvider } from './HammerConfig'
import { AppData } from "./AppData"
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

import { AppComponent } from './components/app/app.component';
import { GotoTop } from './components/goto-top/GotoTop.directive';

@NgModule({
  declarations: [
    AppComponent,
    GotoTop
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    AckRouterModule,
    FormsModule,
    AppRoutingModule,
    AckModule.forRoot(),
    AckOfflineModule.forRoot(),
    AckFxModule
  ],
  providers: [
    AppData,
    RouteHistory,
    hammerProvider,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
