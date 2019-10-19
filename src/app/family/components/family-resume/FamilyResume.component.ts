import { Observable } from 'rxjs/internal/Observable'
import { Component } from '@angular/core';
import { string } from "./family-resume.template"
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
import { photo } from '../../../types'


@Component({
  template: string,
  animations:animations
}) export class FamilyResume {
  photos$:Observable<photo[]>

  constructor(
    public FamilyApp:FamilyApp
  ){
    this.photos$ = this.FamilyApp.Data.ResumePhotos.loadPhotos()
  }
}