import {
  Output, EventEmitter,
  HostListener, Directive
} from '@angular/core'

declare var window:any
//declare var cordova:any
declare var navigator:any

@Directive({
  selector: "[take-photo]",
  exportAs: "TakePhoto"
}) export class TakePhoto {
  @Output('take-photo') taken:EventEmitter<TakePhoto> = new EventEmitter()
  //webcam:any
  //showPreview:boolean = navigator.camera ? false : true

  url:string
  osFilePath:string

  supported:boolean

  ngOnInit(){
    this.supported = !!navigator.camera
  }

  ngOnDestroy(){
    if( this.supported ){
      navigator.camera.cleanup()
    }
  }

  @HostListener("click")
  onClick(){
    if( this.supported ){
      this.takePhoto()
    }
  }

  setUrl( fileUrl ){
    this.osFilePath = fileUrl
    const ionUrl = window.Ionic.WebView.convertFileSrc(fileUrl)
    this.url = ionUrl        
  }

  takePhoto(){
    return navigator.camera.getPicture(
      fileUrl=>{
        setTimeout(()=>{
          this.setUrl(fileUrl)
          this.taken.emit( this )
        }, 0)//cause angular to review page changes with timeout finish
      },
      err=>{
        console.error("camera error",err)
      },{
        quality: 50,
        cameraDirection: 1,//SELFIE
        correctOrientation:true,
        destinationType: navigator.camera.DestinationType.FILE_URI
      }
    )
  }
}
