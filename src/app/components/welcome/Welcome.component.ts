import { Component } from '@angular/core';
import { string } from "./welcome.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
}) export class Welcome {
  transformZ:string = 'rotate(20deg)'
  gyroWatcher:any
  boxValues:any = {}
  resetValues:any
  gyroValues:any = {}

  ngOnInit(){
console.log(0)
    this.gyroWatcher = window.addEventListener("deviceorientation", event=>this.handleOrientation(event), true)
  }

  ngOnDestroy(){
    window.removeEventListener("deviceorientation", this.gyroWatcher, true)
  }

  reset(){
    this.resetNumbers()
    this.createBoxValues()
  }

  resetNumbers(){
    this.resetValues = {
      alpha    : this.gyroValues.alpha,
      beta     : this.gyroValues.beta,
      gamma    : this.gyroValues.gamma
    }
  }

  handleOrientation( event:DeviceOrientationEvent ){
console.log("rotate")
    this.gyroValues = {
      absolute : event.absolute,//?
      alpha    : event.alpha,//z - left and right
      beta     : event.beta,//x - size aka forward tilt
      gamma    : event.gamma//y - compass
    }

    if( !this.resetValues ){
      this.reset()
    }

    this.createBoxValues()
  }

  createBoxValues(){
    let a = Math.ceil(this.gyroValues.alpha)

    this.boxValues.orientation = window.orientation
    const o = window.orientation || 0
    const portrait = o==0 || o==180

    let aAdj = Math.ceil(this.resetValues.alpha - a)
    this.boxValues.a = a
    this.boxValues.aAdj = aAdj

    if( portrait != this.boxValues.portrait ){
      setTimeout(()=>this.resetNumbers(), 600)
    }

    if( portrait ){      
      this.boxValues.transformZ = 'rotate('+aAdj+'deg)'
    }else{
      this.boxValues.transformZ = 'perspective(50px) rotateY('+(-aAdj)+'deg)'
    }
    
    this.boxValues.portrait = portrait
  }
}