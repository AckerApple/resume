import { Component } from '@angular/core';
import { string } from "./main-menu.template"
import { animations } from "ack-angular-fx"
import { AppData } from "../../AppData"
import { version } from '../../../../package.json'

@Component({
  template: string,
  animations:animations
})
export class MainMenu {
  confirmIntro:boolean
  version = version
  delay2 = false
  mouseover:number

  hasPhoneCopy:boolean
  showPhoneModal:boolean
  hasEmailCopy:boolean
  showEmailModal:boolean

  constructor(public AppData:AppData){
  }

  ngOnInit(){
    this.AppData.load
    .then(()=>{
      setTimeout(()=>{
        if( !this.AppData.offline.completedIntroAt ){
          this.AppData.completedIntro()
        }
        this.delay2=true
      }, 2000)
    })
  }

  copyEmail(){
    copyToClipboard("me@AckerApple.com")
    this.hasEmailCopy = true
  }

  copyPhone(){
    copyToClipboard("5612392967")
    this.hasPhoneCopy = true
  }
}

export function copyToClipboard(str){
  const el = document.createElement('textarea');
  el.value = str;
  document.body.appendChild(el);
  el.select();
  document.execCommand('copy');
  document.body.removeChild(el);
}