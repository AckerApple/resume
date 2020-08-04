import { Component } from '@angular/core'
import { animations } from 'ack-angular-fx'

//declare var window:any
//declare var cordova:any
declare var navigator: any

@Component({
  selector: "device-location",
  animations,
  templateUrl: './device-location.template.html'
}) export class DeviceLocation {
  loadCount: number = 0
  coords: any

  getLocation() {
    ++this.loadCount
    navigator.geolocation.getCurrentPosition(
      position => {
        --this.loadCount
        this.coords = position.coords
        //position.coords.altitude
        //position.coords.accuracy
        //position.coords.altitudeAccuracy
        //position.coords.heading
        //position.coords.speed
        //position.timestamp
      },
      err => {
        --this.loadCount
        console.error("geo error", err)
      },
      { timeout: 5000 }
    )
  }
}
