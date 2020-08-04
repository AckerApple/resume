import { Component } from '@angular/core';
import { animations } from "ack-angular-fx"

@Component({
  selector: 'device-orientation',
  templateUrl: './device-orientation.template.html',
  animations
})
export class DeviceOrientation {
  gyroWatcher: any
  resetValues: any
  gyroValues: any = {
    alpha: 0,//left and right
    beta: 0,//size aka forward tilt
    gamma: 0
  }
  boxValues: any = {}
  holdA: boolean
  holdB: boolean
  holdG: boolean

  constructor() {
    setTimeout(() => this.reset(), 5000)
  }

  ngOnInit() {
    this.gyroWatcher = window.addEventListener("deviceorientation", event => this.handleOrientation(event), true)
  }

  ngOnDestroy() {
    window.removeEventListener("deviceorientation", this.gyroWatcher, true)
  }

  reset() {
    this.resetNumbers()
    this.createBoxValues()
  }

  resetNumbers() {
    this.resetValues = {
      alpha: this.gyroValues.alpha,
      beta: this.gyroValues.beta,
      gamma: this.gyroValues.gamma
    }
  }

  handleOrientation(event: DeviceOrientationEvent) {
    this.gyroValues = {
      absolute: event.absolute,//?
      alpha: event.alpha,//z - left and right
      beta: event.beta,//x - size aka forward tilt
      gamma: event.gamma//y - compass
    }

    if (!this.resetValues) {
      this.reset()
    }

    this.createBoxValues()
  }

  createBoxValues() {
    //cause reverse rotation

    let a = Math.ceil(this.gyroValues.alpha)
    let b = Math.ceil(this.gyroValues.beta)
    let g = Math.ceil(this.gyroValues.gamma)

    this.boxValues.aPercent = a / 360 * 100
    this.boxValues.bPercent = (b + 180) / 360 * 100
    this.boxValues.gPercent = (g + 90) / 180 * 100

    this.boxValues.orientation = window.orientation
    const o = window.orientation || 0
    const portrait = o == 0 || o == 180
    const right = o == 90

    let aAdj = Math.ceil(this.resetValues.alpha - a)
    let bAdj = Math.ceil(this.resetValues.beta - b)
    let gAdj = Math.ceil(this.resetValues.gamma - g)

    this.boxValues.a = this.holdA ? this.boxValues.a : a
    this.boxValues.b = this.holdB ? this.boxValues.b : b
    this.boxValues.g = this.holdG ? this.boxValues.g : g

    this.boxValues.aAdj = this.holdA ? aAdj = this.boxValues.a : aAdj
    this.boxValues.bAdj = this.holdB ? bAdj = this.boxValues.b : bAdj
    this.boxValues.gAdj = this.holdG ? gAdj = this.boxValues.g : gAdj

    if (portrait != this.boxValues.portrait) {
      setTimeout(() => this.resetNumbers(), 600)
    }

    const flatUp = this.boxValues.b < 45
    const flatDown = this.boxValues.b > 135

    this.boxValues.flatUp = flatUp
    this.boxValues.flatDown = flatDown

    if (portrait) {

      this.boxValues.transformZ = 'rotate(' + aAdj + 'deg)'
      //this.boxValues.rotate = 'rotate('+aAdj+'deg)'
      this.boxValues.transform = 'perspective(200px) rotate(' + aAdj + 'deg) rotateX(' + (o == 0 ? bAdj : -bAdj) + 'deg) rotateY(' + (o == 0 ? -gAdj : gAdj) + 'deg)'
      this.boxValues.transformX = 'perspective(200px) rotateX(' + (o == 0 ? bAdj : -bAdj) + 'deg)'
      this.boxValues.transformY = ' perspective(200px) rotateY(' + (o == 0 ? -gAdj : gAdj) + 'deg)'
      //a = g > 0 ? -a : a
      //this.boxValues.transform = 'perspective(200px) rotateZ('+(o==0 ?a:-a)+'deg) rotateX('+(o==0?b:-b)+'deg) rotateY('+(-g)+'deg)'
    } else {
      //this.boxValues.rotate = 'rotate('+aAdj+'deg)'
      this.boxValues.transformZ = 'perspective(100px) rotateY(' + (-aAdj) + 'deg)'
      this.boxValues.transform = 'perspective(100px) rotate(' + (right ? -gAdj : gAdj) + 'deg) rotateX(' + aAdj + 'deg) rotateY(' + (right ? -bAdj : bAdj) + 'deg)'
      this.boxValues.transformX = 'perspective(100px) rotateX(' + (right ? -gAdj : gAdj) + 'deg)'
      this.boxValues.transformY = 'rotate(' + (right ? -bAdj : bAdj) + 'deg)'
    }

    this.boxValues.portrait = portrait
  }
}