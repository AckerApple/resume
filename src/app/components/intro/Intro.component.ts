import { Component } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { AppData } from '../../AppData'
import { string } from "./intro.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
}) export class Intro {
  page:number = 0
  nextLink:string = 'purpose'

  constructor(
    public AppData:AppData,
    public ActivatedRoute:ActivatedRoute
  ){}
//rotate('+aAdj+'deg)
  navTo( url ){
    this.AppData.navTo(url, this.ActivatedRoute)
    return true
  }

  makeNextLink(){
    const steps = ['welcome','purpose','family']
    const firstChild = this.ActivatedRoute.firstChild

    if( !firstChild ){
      this.nextLink = "/"
      return
    }

    const rc = firstChild.routeConfig
    const current = steps.indexOf(rc.path.toLowerCase())

    if( current == steps.length-1 ){
      this.nextLink = "/"
      return
    }

    this.nextLink = steps[current + 1]
  } 
}