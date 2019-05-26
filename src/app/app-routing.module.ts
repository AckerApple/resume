import { WebCamModule } from "ack-angular-webcam"
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { CommonModule } from "@angular/common"
import { FormsModule }   from "@angular/forms"

import { AckModule } from 'ack-angular/AckModule'
import { AckFxModule } from 'ack-angular-fx'
import { AgmCoreModule } from "@agm/core"
import { AgmOverlays } from "agm-overlays"
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
    AckFxModule,
    WebCamModule,
    agmRoot,
    AgmOverlays,
    RouterModule.forRoot(routes, routeConfig)
  ],
  declarations:declarations,
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
