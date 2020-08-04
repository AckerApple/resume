import { Component } from '@angular/core';
import { AppData } from "../../AppData"
import { animations } from "ack-angular-fx"
import { string as changelog } from "../../../changelog.template"

@Component({
  templateUrl: './bundle-stats.template.html',
  animations
}) export class BundleStats {
  appSizeChart: boolean;
  width: number;
  changelog = changelog;

  constructor(public AppData: AppData) { }
}
