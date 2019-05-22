import { Component } from '@angular/core';
import { string } from "./bundle-stats.template"
import { AppData } from "../../AppData"
import { animations } from "ack-angular-fx"
import { string as changelog } from "../../../changelog.template"

@Component({
  template: string,
  animations:animations
}) export class BundleStats {
  appSizeChart:boolean
  width:number
  changelog = changelog

  constructor(public AppData:AppData){}
}