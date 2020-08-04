import {
  Component
} from '@angular/core';
import { animations } from 'ack-angular-fx'
import { AppData } from '../../../AppData'
import { FamilyApp } from '../../FamilyApp'

@Component({
  templateUrl: './family.template.html',
  animations,
  providers: [FamilyApp]
}) export class Family {
  constructor(
    public AppData: AppData,
    public FamilyApp: FamilyApp
  ) {
    this.AppData.load.then(() => {
      if (!this.AppData.offline.completedIntroAt) {
        this.AppData.completedIntro();
      }
    });
  }
}
