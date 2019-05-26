import { Component } from '@angular/core'
import { string } from './device-location.template'
import { animations } from 'ack-angular-fx'

//declare var window:any
//declare var cordova:any
declare var navigator:any

@Component({
  selector: "device-location",
  animations:animations,
  template: string
}) export class DeviceLocation {
  loadCount:number = 0
  coords:any

  getLocation(){
    ++this.loadCount
    navigator.geolocation.getCurrentPosition(
      position=>{
        --this.loadCount
        this.coords = position.coords
        //position.coords.altitude
        //position.coords.accuracy
        //position.coords.altitudeAccuracy
        //position.coords.heading
        //position.coords.speed
        //position.timestamp
      },
      err=>{
        --this.loadCount
        console.error("geo error",err)
      },
      {timeout: 5000}
    )
  }
}
