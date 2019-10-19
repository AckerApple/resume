import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { string } from "./family-login.template"
import { animations } from "ack-angular-fx"
import { AckApi } from 'ack-angular/modules/offline/AckApi'
import { FamilyApp } from '../../FamilyApp'

import { user } from '../../../types'
import { auth } from 'firebase/app';
interface localUser extends user{
  password:string
}

@Component({
  selector:'family-login',
  template: string,
  animations:animations
}) export class FamilyLogin {
  submitCount:number = 0
  loadCount:number = 0
  user:localUser = <localUser>{}
  vals:{[index:string]:boolean} = {}
  shows:{[index:string]:boolean} = {}
  rejectCount:number = 0

  constructor(
    public Router:Router,
    public ActivatedRoute:ActivatedRoute,
    public AckApi:AckApi,
    public FamilyApp:FamilyApp
  ){}

  reval(){
    const offline = this.FamilyApp.AppData.offline
    const user = offline.user
    const email = user.email
    this.vals.email = email && email.indexOf('@')>=0
    this.vals.password = this.user.password && this.user.password.length>7
  }

  login(){
    ++this.submitCount

    this.reval()
    if( !this.vals.email || !this.vals.password ){
      return
    }

    ++this.loadCount

    const offline = this.FamilyApp.AppData.offline
    const user = offline.user

    this.FamilyApp.loginUser(
      user.email,
      this.user.password
    )
    .then(res=>{      
      --this.loadCount
      this.rejectCount = 0
      this.FamilyApp.gotoMain()
    })
    .catch(e=>{
      --this.loadCount
      ++this.rejectCount
    })
  }

  googleSignIn(){
    const Auth = this.FamilyApp.AngularFireAuth.auth
    Auth.signInWithPopup(
      new auth.GoogleAuthProvider()
    )
  }
}