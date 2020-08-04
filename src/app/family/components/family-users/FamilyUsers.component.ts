import { Component } from '@angular/core';
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
//import { AppData } from '../../AppData'

@Component({
  templateUrl: './family-users.template.html',
  animations
}) export class FamilyUsers {
  constructor(
    public FamilyApp: FamilyApp
  ){
    this.FamilyApp.Data.loadUsers()
  }
}