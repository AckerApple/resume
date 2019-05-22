import {
  Input, Component, ContentChild,
  ViewChild, TemplateRef, ElementRef
} from '@angular/core'

@Component({
  selector: "ack-meter",
  template:'<ng-template><ng-content></ng-content></ng-template>'
}) export class AckMeter{
  @Input() percent:number
  @Input() meterClass:any
  @ViewChild(TemplateRef) content:TemplateRef<ElementRef>
  @ContentChild('meterLabel') meterLabel:TemplateRef<ElementRef>
}
