import { WebCamModule } from "ack-angular-webcam"
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from "@angular/common"
import { FormsModule }   from "@angular/forms"

import { Module as AckAngularFire } from 'ack-angular-fire';
import { AckModule } from 'ack-angular/AckModule'
import { AckRouterModule } from "ack-angular/AckRouterModule"
import { AckFxModule } from 'ack-angular-fx'
import { AgmCoreModule } from "@agm/core"
import { AgmOverlays } from "agm-overlays"
import { ngfModule } from "angular-file"

const agmRoot = AgmCoreModule.forRoot({
  apiKey: "AIzaSyBnYAuCBw79sDvvqAWkZqz9OKOcvyIJeyQ"
})

import { declarations } from './declarations'
import { routes } from './routes'

export const routeConfig = {
  useHash:false//,
  //initialNavigation:true,
  //enableTracing:false
}

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AckModule.forRoot(),
    AckAngularFire,
    AckRouterModule,
    AckFxModule,
    ngfModule,
    WebCamModule,
    agmRoot,
    AgmOverlays,
    RouterModule.forRoot(routes, routeConfig)
  ],
  declarations:declarations,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
