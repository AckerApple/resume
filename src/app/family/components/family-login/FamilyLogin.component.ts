import { Component } from '@angular/core';
import { string } from "./family-login.template"
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
import { AppData } from '../../../AppData'

@Component({
  selector:'family-login',
  template: string,
  animations:animations
}) export class FamilyLogin {
  shows:{[index:string]:boolean} = {}

  constructor(
    public FamilyApp:FamilyApp,
    public AppData:AppData
  ){}

  onLogin() {
    const offline = this.AppData.offline;
    offline.user.email = this.AppData.offline.user.email;
    this.AppData.save();
    this.FamilyApp.gotoMain();
  }
}