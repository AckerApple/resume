// TIP: Another module is here: src/app/app-routing.module.ts

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgxPageScrollModule } from 'ngx-page-scroll';

import { Module as AckAngularFire } from 'ack-angular-fire';
import { AckFxModule } from 'ack-angular-fx';
import { AckModule } from 'ack-angular/AckModule';
import { AckOfflineModule } from 'ack-angular/modules/offline/module';
import { AckRouterModule } from 'ack-angular/modules/router/AckRouterModule'

import { hammerProvider } from './HammerConfig'
import { AppData } from './AppData'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { GotoTop } from './components/goto-top/GotoTop.directive';

// npm install firebase @angular/fire
import { firebaseConfig } from './firebaseConfig'
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    GotoTop
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgxPageScrollModule,
    AckRouterModule.forRoot(),
    FormsModule,
    AckAngularFire,
    AppRoutingModule,

    // firebase
    AngularFireModule.initializeApp(
      firebaseConfig, 'ackerapple'
    ),
    AngularFireAuthModule,
    AngularFirestoreModule.enablePersistence(),
    AngularFireStorageModule,

    AckModule.forRoot(),
    AckOfflineModule.forRoot(),
    AckFxModule
  ],
  providers: [
    AppData,
    hammerProvider,
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
