import { Observable } from "rxjs/internal/Observable"
import { Component } from '@angular/core';
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
//import { AppData } from '../../AppData'


@Component({
  templateUrl: './family-main.template.html',
  animations
}) export class FamilyMain {
  photos$: Observable<any[]>
  modal: any

  constructor(
    public FamilyApp: FamilyApp
  ){
    this.photos$ = this.FamilyApp.Data.Photos.loadPhotos()
  }
}