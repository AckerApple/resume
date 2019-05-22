import {
  Input, ContentChildren, Component
} from '@angular/core'
import { string } from './ack-meter-display.template'
import { AckMeter } from '../ack-meter/AckMeter.component'

export interface options{
  height:string
}

@Component({
  selector: "ack-meter-display",
  template: string
}) export class AckMeterDisplay{
  @Input() options:options
  @ContentChildren(AckMeter) AckMeters:AckMeter[]
}
