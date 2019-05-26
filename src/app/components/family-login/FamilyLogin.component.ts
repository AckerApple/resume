import { Component } from '@angular/core';
import { string } from "./family-login.template"
import { animations } from "ack-angular-fx"
import { AckApi } from 'ack-angular/modules/offline/AckApi'
import { AppData } from '../../AppData'
import { passhash } from '../../passhash'

export interface user{
  email:string
  password:string
}

@Component({
  selector:'family-login',
  template: string,
  animations:animations
}) export class FamilyLogin {
  submitCount:number = 0
  loadCount:number = 0
  user:user = <user>{}
  vals:{[index:string]:boolean} = {}
  shows:{[index:string]:boolean} = {}
  rejectCount:number = 0

  constructor(
    public AckApi:AckApi,
    public AppData:AppData
  ){
    this.AppData.load.then(()=>
      this.user.email = this.AppData.offline.user.email
    )
  }

  reval(){
    this.vals.email = this.user.email && this.user.email.indexOf('@')>=0
    this.vals.password = this.user.password && this.user.password.length>7
  }

  login(){
    ++this.submitCount

    this.reval()
    if( !this.vals.email || !this.vals.password ){
      return
    }

    ++this.loadCount
    
    this.AppData.offline.user.email = this.user.email
    this.AppData.save()

    const sendUser = {...this.user}
    sendUser.password = passhash(this.user.password)

    this.AckApi.post("/login", sendUser)
    .then(()=>{
      --this.loadCount
      this.rejectCount = 0
    })
    .catch(e=>{
      --this.loadCount
      ++this.rejectCount
    })
  }
}