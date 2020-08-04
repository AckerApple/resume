import { Component } from '@angular/core';
import { string } from "./family-users.template"
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
//import { AppData } from '../../AppData'

@Component({
  template: string,
  animations: animations
}) export class FamilyUsers {
  constructor(
    public FamilyApp: FamilyApp
  ){
    this.FamilyApp.Data.loadUsers()
  }
}