import { Injectable } from '@angular/core';
import { AckOffline, AckApi } from 'ack-angular/modules/offline';
import { ActivatedRoute, Router } from '@angular/router';
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

interface user{
  user:string
  email:string
  name:string
  token:string
}

interface offlineData{
  user:user
  completedIntroAt:number
}

interface environment{
  platform:string
  env:string
}

declare var window:any

@Injectable()
export class AppData {
  taps:number = 0
  debug:boolean
  width:number//px - htmlWidthModel
  environment:environment = <environment>{}
  wwwBasePath:string

  offline:offlineData = <offlineData>{}
  loadOffline:Promise<any> = Promise.resolve()
  load:Promise<any> = Promise.resolve()
  loaded:boolean

  constructor(
    public AckApi:AckApi,
    public AckOffline:AckOffline,
    public RouteHistory:RouteHistory,
    public Router:Router
  ){
    this.fireLoad()

    this.AckApi.config.baseUrl = "https://ackerapple.com/functions"

    document.addEventListener("deviceready", ()=>{
      window.Ionic.WebView.getServerBasePath(r=>{
        this.wwwBasePath = r
      })
    }, false);
  }

  fireLoad(){
    this.load = this.load
    .then( ()=>this.loadEnvironment() )
    .then( ()=>this.loadOfflineStorage() )
    .then( ()=>{
      const icon = document.getElementById('mainLoadIcon')
      icon.parentNode.removeChild(icon)
      this.loaded=true
    })
  }

  debugTap(){
    ++this.taps

    if( this.taps % 5 === 0 ){
      this.debug = !this.debug
    }
  }

  loadEnvironment():Promise<void>{
    return new Promise((res,rej)=>{    
      const http = new XMLHttpRequest()
      const url = "/runtime.json"
      http.open("GET",url)
      http.send()
      http.onreadystatechange = (e)=>{
        if( http.readyState===4 && http.status===200 ){
          res( JSON.parse(http.responseText) )
        }
      }
    })
    .then((setup:any)=>{
      Object.assign(this.environment, setup)//paste runtime config
    })
  }

  navTo(url, ar?:ActivatedRoute ){
    this.Router.navigate([url], {relativeTo:ar})
  }

  navBack(){
    this.RouteHistory.goBack()
  }

  navAhead(){
    this.RouteHistory.goForward()
  }

  loadOfflineStorage():Promise<offlineData>{
    return this.loadOffline = this.loadOffline
    .then( ()=>this.AckOffline.get("ack-app") )
    .then( (offline:offlineData)=>{
      this.applyOfflineConfig(offline)
      if( !this.offline.completedIntroAt ){
        this.Router.navigate(["/intro"])
      }
      return offline
    })
  }

  applyOfflineConfig( data:offlineData ){
    Object.assign(this.offline, data)
    this.offline.user = this.offline.user || <user>{}
  }

  completedIntro(){
    this.offline.completedIntroAt = Date.now()
    this.save()
  }

  save(){
    return this.loadOffline = this.loadOffline
    .then(()=>this.AckOffline.set("ack-app", this.offline))
    .catch(e=>{
      //log(this.constructor.name,"#save","error",e.message)
      //this.AppErrors.setLast(e)
      this.loadOffline = Promise.resolve()
      return Promise.reject( e )
    })
  }

  clearSession(){
    this.offline.user.token
    return this.AckOffline.clear("t2c")
  }
}