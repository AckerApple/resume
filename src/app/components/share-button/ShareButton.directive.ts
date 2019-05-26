import {
  HostListener, Output,
  EventEmitter, Input, Directive
} from '@angular/core';

declare var window:any

// this is the complete list of currently supported params you can pass to the plugin (all optional)
export interface options{
  message: string//'share this', // not supported on some apps (Facebook, Instagram)
  subject: string//'the subject', // fi. for email
  files: string[] // an array of filenames either locally or remotely
  url: string//'https://www.website.com/foo/#bar?a=b',
  //chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
  //appPackageName: 'com.apple.social.facebook' // Android only, you can provide id of the App you want to share with
};

@Directive({
  selector: '[share-button]'
}) export class ShareButton {
  @Input() type:'shareWithOptions'|'shareViaEmail'|string = 'shareWithOptions'
  @Input('share-button') options:options
  @Output() success:EventEmitter<any> = new EventEmitter()
  @Output() error:EventEmitter<any> = new EventEmitter()

  @HostListener("click")
  onClick(){
    if( this.type==='shareViaEmail' ){
      this.shareViaEmail()
      return
    }

    this.shareWithOptions()
  }

  shareWithOptions(){
    window.plugins.socialsharing.shareWithOptions(
      this.options,
      ()=>this.success.emit(),
      ()=>this.error.emit()
    )
  }
  
  shareViaEmail(){
    window.plugins.socialsharing.shareViaEmail(
      this.options.message,
      this.options.subject,
      ['me@ackerapple.com'],
      null,
      null,
      ()=>this.success.emit(),
      ()=>this.error.emit()
    )
  }
}