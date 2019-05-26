import { Component } from '@angular/core';
import { string } from "./intro-family.template"
import { animations } from "ack-angular-fx"

@Component({
  template: string,
  animations:animations
}) export class IntroFamily {
}