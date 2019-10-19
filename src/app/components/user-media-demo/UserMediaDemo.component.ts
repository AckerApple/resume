import {
  ViewChild, TemplateRef, ElementRef,
  Component } from '@angular/core'
import { string } from './user-media-demo.template'
import { animations } from 'ack-angular-fx'
import { WebCamComponent } from 'ack-angular-webcam'

//declare var window:any
//declare var cordova:any
declare var navigator:any

@Component({
  selector: "user-media-demo",
  animations:animations,
  template: string
}) export class UserMediaDemo {
  @ViewChild( WebCamComponent ) webcam:TemplateRef<ElementRef>
  //webcam:any
  showPreview:boolean = navigator.camera ? false : true

  url:string
  osFilePath:string

  processCamPhoto( webcam ){
    webcam.getBase64().then(url=>this.url=url)
  }
}
