import { Component } from '@angular/core';
import { string } from "./life.template"
import { animations } from "ack-angular-fx"
import {version} from '../../../../package.json'
import { ack } from "ack-x/browser"

export interface dateDec{
  years:number
  months:number
  weeks:number
  days:number
  hours:number
  minutes:number
  seconds:number
}

@Component({
  template: string
}) export class Life {
  nextB:Date
  born = new Date(1982, 9, 10, 8, 0, 0, 0).getTime()
  married = new Date(2008, 2, 7, 20, 0, 0, 0).getTime()
  gradDate = new Date(2001, 7, 6, 19, 0, 0, 0).getTime()

  marriedFor:dateDec
  aliveFor:dateDec
  nextBday:dateDec
  flStated:dateDec
  graduated:dateDec

  interval:any

  constructor(){
    this.interval = setInterval(()=>this.updateTime(),1000)
    this.updateTime()
  }

  ngOnDestroy(){
    clearInterval( this.interval )
  }

  updateTime(){
    const now = new Date()

    this.marriedFor = ack.date( this.married ).diffStats( now )
    this.aliveFor = ack.date( this.born ).diffStats( now )
    this.graduated = ack.date( this.gradDate ).diffStats( now )
    
    //calc until dates
    const nBday = now.getMonth()>10 ? now.getFullYear() + 1 : now.getFullYear()
    const nextB = ack.date( new Date('10/10/'+nBday) ).gotoSod()
    this.nextB = nextB.date
    let start = ack.date( now )
    this.nextBday = start.diffStats( nextB )
  }
}