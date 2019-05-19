import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RouteHistory } from 'ack-angular/modules/router/RouteHistory.provider';

interface environment{
  platform:string
  env:string
}

@Injectable()
export class AppData {
  taps:number = 0
  debug:boolean
  width:number//px - htmlWidthModel
  environment:environment = <environment>{}

  constructor(
    public RouteHistory:RouteHistory,
    public Router:Router
  ){
    this.loadEnvironment()
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

  navBack(){
    this.RouteHistory.goBack()
  }

  navAhead(){
    this.RouteHistory.goForward()
  }
}