import { log } from "../log";

import { Observable } from 'rxjs/internal/Observable'
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from '../AppData'
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { User } from 'firebase';
import { FamilyData } from "./FamilyData";
import { FirebaseApp, FireUser } from "ack-angular-fire"
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable() export class FamilyApp extends FirebaseApp {
  debugMode: boolean;
  load: Promise<any>;
  loaded: boolean;

  Data: FamilyData;

  constructor(
    public FireUser: FireUser,
    public storage: AngularFireStorage,
    public AngularFireAuth: AngularFireAuth,
    public db: AngularFirestore,
    public AppData: AppData,
    public ActivatedRoute: ActivatedRoute,
    public Router: Router
  ){
    super(FireUser, storage, AngularFireAuth, db);

    this.load = this.AppData.load.then(() =>
      this.loaded = true
    );

    this.Data = new FamilyData(this);
  }

  setAuthUser( user: User ): Observable<any>{
    const devEmails = ['me@ackerapple.com','acker.dawn.apple@gmail.com']
    if ( devEmails.indexOf(user.email) >= 0 ){
      this.debug()
      log('developer identified')
    }

    return super.setAuthUser(user);
  }

  debug( yesNo: boolean=true ){
    this.debugMode = yesNo
    if ( yesNo ) {
      localStorage.debug = 'aa*'
    } else {
      localStorage.debug = ''
    }
  }

  checkLogin() {
    const user = this.AppData.offline.user;
    if ( !user ){
      this.gotoLogin()
    }
  }

  clearLocalUser() {
    super.clearLocalUser();
    this.debug( false );
  }

  logout() {
    super.logout();
    this.AppData.save();
  }

  gotoLogin() {
    this.Router.navigate(['./login'],{relativeTo:this.ActivatedRoute});
  }

  gotoMain() {
    this.Router.navigate(['./'],{relativeTo:this.ActivatedRoute});
  }
}
