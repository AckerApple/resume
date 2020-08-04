import { log } from '../log';

import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable'
import { Injectable, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppData } from '../AppData';
import { FamilyData } from './FamilyData';
import { user } from 'ack-angular-fire';
import {
  AngularFirestore
} from '@angular/fire/firestore';
import { User } from 'firebase';
import { FireUser } from 'ack-angular-fire';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireStorage } from '@angular/fire/storage';

export interface likeUser {
  uid?: string;
  name?: string;
  displayName?: string;
  email?: string;
}

@Injectable()
export class FamilyApp implements OnDestroy {
  debugMode: boolean;
  load: Promise<any>;
  loaded: boolean;
  Data: FamilyData;
  user: user;

  subs: Subscription = new Subscription();

  constructor(
    public FireUser: FireUser,
    public storage: AngularFireStorage,
    public AngularFireAuth: AngularFireAuth,
    public db: AngularFirestore,
    public AppData: AppData,
    public ActivatedRoute: ActivatedRoute,
    public Router: Router
  ) {
    this.load = this.AppData.load
      .then(() =>
        this.monitorFirebase()
      ).then(() =>
        this.loaded = true
      )

    this.Data = new FamilyData(this)
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }

  monitorFirebase(): Promise<void> {
    return new Promise((res, rej) => {
      this.subs.add(
        this.FireUser.login.subscribe(user => {
          this.setAuthUser(user).subscribe(() => res())
        })
      ).add(
        this.FireUser.logout.subscribe(user => {
          this.clearLocalUser()
          res()
        })
      )
    })
  }

  setAuthUser(user: User): Observable<any> {
    const devEmails = ['me@ackerapple.com', 'acker.dawn.apple@gmail.com']
    if (devEmails.indexOf(user.email) >= 0) {
      this.debug()
      log('developer identified')
    }

    this.user = {
      name: user.displayName,// || user.name,
      email: user.email,
      uid: user.uid,
      photoUrl: getUserPhotoUrl(user)
    }
    const offline = this.AppData.offline
    offline.user = this.user

    log("user", this.user)
    const loadUser = this.Data.loadUser(user.uid)

    loadUser.subscribe((user: user) => {
      if (!user) {
        log("FamilyApp", "createUserBy", this.user)
        this.Data.createUserBy(this.user)
      }

      this.user.photoUrl = this.user.photoUrl || user.photoUrl
      Object.assign(this.user, user)
    })

    return loadUser
  }

  debug(yesNo: boolean = true) {
    this.debugMode = yesNo
    if (yesNo) {
      localStorage.debug = 'aa*'
    } else {
      localStorage.debug = ''
    }
  }

  checkLogin() {
    const user = this.AppData.offline.user
    if (!user) {
      this.gotoLogin()
    }
  }
  /*
    validateLogin():Promise<boolean>{
      const user = this.AppData.offline.user
      if( user ){
        if( user.security ){
          return this.getValidateLogin()
          //this.gotoMain()
        }
      }
    }
  */
  /*
    getValidateLogin():Promise<boolean>{
      return this.AppData.AckApi.get("/validate")
      .then(result=>{
        if( !result ){
          this.logout()
        }
        return result ? true : false
      })
    }
  */
  clearLocalUser() {
    delete this.user;
    this.debug(false);
  }

  logout() {
    // coming soon => this.AngularFireAuth.signOut();
    this.AngularFireAuth.auth.signOut();

    this.clearLocalUser();
    // delete this.AppData.offline.user.security
    this.AppData.save();
    // this.gotoLogin()
  }

  gotoLogin() {
    this.Router.navigate(['./login'], { relativeTo: this.ActivatedRoute });
  }

  gotoMain() {
    this.Router.navigate(['./'], { relativeTo: this.ActivatedRoute });
  }
}

export function getUserPhotoUrl(user: any): string {
  const data0 = user.providerData && user.providerData.length && user.providerData[0];

  if (data0 && data0.photoURL) {
    return data0.photoURL;
  }

  return user.photoUrl;
}
