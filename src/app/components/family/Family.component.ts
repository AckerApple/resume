import { Component } from '@angular/core';
import { string } from "./family.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"

@Component({
  template: string,
  animations:animations
}) export class Family {
  constructor(public AppData:AppData){
  }

  ngOnInit(){
    this.AppData.load.then(()=>{
      if( !this.AppData.offline.completedIntroAt ){
        this.AppData.completedIntro()
      }
    })
  }
}