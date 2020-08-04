import { Component } from '@angular/core';
import { animations } from "ack-angular-fx"

@Component({
  templateUrl: './intro-family.template.html',
  animations
}) export class IntroFamily {
  shows: { [index: string]: boolean } = {}
}