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

  constructor(
    public AppData:AppData,
    public ActivatedRoute:ActivatedRoute
  ){}
//rotate('+aAdj+'deg)
  navTo( url ){
    this.AppData.navTo(url, this.ActivatedRoute)
    return true
  }
  
}