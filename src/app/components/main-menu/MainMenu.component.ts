import { Component } from '@angular/core';
import { string } from "./main-menu.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"
import { version } from '../../../../package.json'

@Component({
  template: string,
  animations:animations
})
export class MainMenu {
  version = version
  delay2 = false
  mouseover:number

  constructor(public AppData:AppData){
    setTimeout(()=>this.delay2=true, 2000)
  }
}
