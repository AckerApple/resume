import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPageScrollModule } from "ngx-page-scroll"

import { AckFxModule } from 'ack-angular-fx';
import { AckModule } from 'ack-angular/AckModule';
import { AckOfflineModule } from 'ack-angular/modules/offline/module';
import { AckRouterModule } from "ack-angular/AckRouterModule"
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

import { hammerProvider } from './HammerConfig'
import { AppData } from "./AppData"
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { GotoTop } from './components/goto-top/GotoTop.directive';

import { firebaseConfig } from './firebaseConfig'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireStorageModule } from "@angular/fire/storage";

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
    AngularFireModule.initializeApp(firebaseConfig,'ackerapple'),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,
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
