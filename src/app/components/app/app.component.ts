import { Component } from '@angular/core';
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
  
  constructor(
    public AppData:AppData
  ){}
}