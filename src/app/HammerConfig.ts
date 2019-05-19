import { CommonModule } from "@angular/common"
//import { RouterModule } from "@angular/router"

import * as Hammer from "hammerjs"
import {
  HammerGestureConfig, HAMMER_GESTURE_CONFIG
} from "@angular/platform-browser"

export class HammerConfig extends HammerGestureConfig{
  overrides = <any>{
    'pan': {
      touchAction:"auto"
    },
    'swipe': {
      direction:Hammer.DIRECTION_HORIZONTAL
      //disables vertical scroll
      //direction:Hammer.DIRECTION_ALL
    }
  }

  options = {
    touchAction: 'auto',
    recognizers: [
        [Hammer.Pan,{ direction: Hammer.DIRECTION_HORIZONTAL }],
    ]
  }
  
  buildHammer(element: HTMLElement) {
    let mc = new Hammer(element, {
      touchAction: "pan-y"
    });
    return mc;
  }
}

export const hammerProvider = {
  provide:HAMMER_GESTURE_CONFIG,
  useClass:HammerConfig
}
