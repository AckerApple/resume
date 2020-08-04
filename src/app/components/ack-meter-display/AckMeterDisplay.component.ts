import {
  Input, ContentChildren, Component
} from '@angular/core'
import { AckMeter } from '../ack-meter/AckMeter.component'

export interface options {
  height: string;
}

@Component({
  selector: "ack-meter-display",
  templateUrl: './ack-meter-display.template.html'
}) export class AckMeterDisplay {
  @Input() options: options;
  @ContentChildren(AckMeter) AckMeters: AckMeter[];
}
