import { Component } from '@angular/core';
import { string } from "./resume.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"

@Component({
  template: string,
  animations:animations
})
export class Resume {
  pdfUrl:string = "https://ackerapple.com/assets/Acker%20Apple%20Resume.pdf"
  watchVideo:boolean

  constructor(public AppData:AppData){}
/*
  osOpenResume(){
    if( this.AppData.environment.platform==='ios' ){
      window.open(this.pdfUrl, '_system')
    }
  }
*/
}