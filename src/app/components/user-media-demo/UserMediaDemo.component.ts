import {
  ViewChild, TemplateRef, ElementRef,
  Component } from '@angular/core';
import { animations } from 'ack-angular-fx';
import { WebCamComponent } from 'ack-angular-webcam';

//declare var window:any
//declare var cordova:any
declare var navigator:any

@Component({
  selector: "user-media-demo",
  animations,
  templateUrl: './user-media-demo.template.html'
}) export class UserMediaDemo {
  @ViewChild( WebCamComponent, { static: false } ) webcam:TemplateRef<ElementRef>
  //webcam:any
  showPreview:boolean = navigator.camera ? false : true

  url:string
  osFilePath:string

  processCamPhoto( webcam ){
    webcam.getBase64().then(url=>this.url=url)
  }
}
