import { Component } from '@angular/core'
import { animations } from 'ack-angular-fx'
import { AppData } from '../../AppData'

@Component({
  selector: "social-sharing",
  animations,
  templateUrl: './social-sharing.template.html'
}) export class SocialSharing {
  constructor(public AppData: AppData) {
  }
}
