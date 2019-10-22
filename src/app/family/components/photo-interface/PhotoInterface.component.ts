import { Observable } from 'rxjs/internal/Observable'
import { WebCamComponent } from "ack-angular-webcam"
import {
  Input, Component, Output,
  EventEmitter,
  ViewChild, TemplateRef, ElementRef
} from '@angular/core'
import { string } from './photo-interface.template'
import { photo } from '../../../types'

export interface viewConfig{
  photo:photo
  allow:{
    delete:boolean
  }
}

@Component({
  selector: "photo-interface",
  template:string
}) export class PhotoInterface{
  @Input() srcBase:string
  @Input() photos$:Observable<photo[]>
  @Output() delete:EventEmitter<photo> = new EventEmitter()
  @Output() addFiles:EventEmitter<File[]> = new EventEmitter()
  @Output() view:EventEmitter<viewConfig> = new EventEmitter()

  cameraModal:any  
  @ViewChild( WebCamComponent, { static: false } ) webcam:TemplateRef<ElementRef>

  processCamPhoto( webcam ){
console.log("webcam",webcam)
    const s = Date.now()
    webcam.getFile('practise-'+s+'.jpg')
    .then(file=>
      this.addFiles.emit([file])
      //this.FamilyApp.Data.Photos.sendPhoto( file )
    )
  }
}