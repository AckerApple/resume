import { Component } from '@angular/core'
import { string } from './user-media-demo.template'
import { animations } from 'ack-angular-fx'

declare var window:any
//declare var cordova:any
declare var navigator:any

@Component({
  selector: "user-media-demo",
  animations:animations,
  template: string
}) export class UserMediaDemo {
  webcam:any
  showPreview:boolean = navigator.camera ? false : true

  base64:string
  osFilePath:string

  ngOnDestroy(){
    if( navigator.camera ){
      navigator.camera.cleanup()
    }
  }

  setBase( base ){
      this.osFilePath = base
      base = window.Ionic.WebView.convertFileSrc(base)
      this.base64=base        
  }

  takePhoto( webcam ){
    if( navigator.camera ){
      return navigator.camera.getPicture(
        base=>{
          setTimeout(()=>{
            this.setBase(base)
          }, 0)//cause angular to review page changes with timeout finish
        },
        err=>{
          console.error("camera error",err)
        },{
          quality: 50,
          cameraDirection: 1,//SELFIE
          correctOrientation:true,
          destinationType: navigator.camera.DestinationType.FILE_URI
        }
      )
    }

    return webcam.getBase64()
    .then( base=>this.base64=base )
  }
}
