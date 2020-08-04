import { Observable } from 'rxjs/internal/Observable'
import { Component } from '@angular/core';
import { animations } from "ack-angular-fx"
import { FamilyApp } from '../../FamilyApp'
import { photo } from '../../../types'


@Component({
  templateUrl: './family-resume.template.html',
  animations
}) export class FamilyResume {
  photos$:Observable<photo[]>

  constructor(
    public FamilyApp:FamilyApp
  ){
    this.photos$ = this.FamilyApp.Data.ResumePhotos.loadPhotos()
  }
}