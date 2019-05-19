import { Component } from '@angular/core';
import { string } from "./app.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"
import {
  PageScrollOptions, PageScrollService, PageScrollInstance
} from "ngx-page-scroll-core";

@Component({
  selector: 'app-root',
  template: string,
  animations:animations
})
export class AppComponent {
  swipes = 0
  
  constructor(
    public AppData:AppData
  ){}
}