import {
  Component
} from '@angular/core';
import { string } from "./family.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../../AppData"
import { FamilyApp } from "../../FamilyApp"

@Component({
  template: string,
  animations:animations,
  providers:[ FamilyApp ]
}) export class Family {
  constructor(
    public AppData:AppData,
    public FamilyApp:FamilyApp
  ){
    this.AppData.load.then(()=>{
      if( !this.AppData.offline.completedIntroAt ){
        this.AppData.completedIntro()
      }
    })
  }
}