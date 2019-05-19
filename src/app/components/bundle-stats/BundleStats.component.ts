import { Component } from '@angular/core';
import { string } from "./bundle-stats.template"
import { AppData } from "../../AppData"
import { animations } from "ack-angular-fx"

@Component({
  template: string
}) export class BundleStats {
  width:number

  constructor(public AppData:AppData){}
}