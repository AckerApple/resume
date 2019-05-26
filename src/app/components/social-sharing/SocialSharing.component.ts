import { Component } from '@angular/core'
import { string } from './social-sharing.template'
import { animations } from 'ack-angular-fx'
import { AppData } from '../../AppData'

@Component({
  selector: "social-sharing",
  animations:animations,
  template: string
}) export class SocialSharing {
  constructor( public AppData:AppData ){
  }
}
