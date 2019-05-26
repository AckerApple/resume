import { Subscription } from 'rxjs/internal/Subscription'
import { Component } from '@angular/core'
import {
  NavigationEnd,
  Router, ActivatedRoute
} from '@angular/router'
import { string } from "./app.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"

@Component({
  selector: 'app-root',
  template: string,
  animations:animations
})
export class AppComponent {
  screenScrollModelY:number
  swipes = 0
  swiping:boolean
  subs:Subscription[]=[]
  
  constructor(
    public Router:Router,
    public AppData:AppData,
    public ActivatedRoute:ActivatedRoute
  ){
    this.subs.push(
      this.Router.events.subscribe(event=>{
        if(event.constructor!=NavigationEnd)return

        const config = ActivatedRoute.firstChild.routeConfig
        const data = config.data
        this.swiping = !data || data.swiping || data.swiping==null
      })
    )
  }

  ngOnDestroy(){
    this.subs.forEach(sub=>sub.unsubscribe())
  }
}